import os
import re
import markdown
from bs4 import BeautifulSoup
from openai import AzureOpenAI
import json
import requests
from pathlib import Path

# Azure OpenAI Client setup
client = AzureOpenAI(
    api_version="2024-02-01",
    azure_endpoint="https://<your-endpoint>.openai.azure.com/",
    api_key="<your-azure-key>",
)

# Base paths
current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(current_dir)
product_info_dir = os.path.join(project_root, "web", "public", "manuals")
images_output_base_dir = os.path.join(current_dir, "images")

# Number of images to generate per product
num_images_per_product = 4

def extract_product_info(markdown_content):
    """Extract product information from markdown content."""
    # Convert markdown to HTML and parse with BeautifulSoup
    html = markdown.markdown(markdown_content)
    soup = BeautifulSoup(html, 'html.parser')
    
    # Extract product title and details
    product_title = soup.find('h1').text if soup.find('h1') else ""
    product_id = re.search(r'编号: (\d+)', product_title).group(1) if re.search(r'编号: (\d+)', product_title) else "0"
    product_desc = soup.find('h1').next_sibling if soup.find('h1') else ""
    
    # Extract brand and category
    brand = ""
    category = ""
    for h2 in soup.find_all('h2'):
        if "类别" in h2.text:
            pattern = fr"## 类别\s*\n(.*?)(?:\n##|\n#|\Z)"
            match = re.search(pattern, markdown_content, re.DOTALL)
    if match:
# 提取匹配到的内容并去除首尾空白
        content = match.group(1).strip()

    return {
        'id': product_id,
        'title': product_title,
        'category': content,
    }

def generate_image_prompt(product_info):
    """Generate a detailed prompt for DALL-E based on product information."""
    category = product_info['category']
    
    prompt = f"一款高品质优雅简洁的{category}产品展示图，重点突出高品质材料和现代美学设计"

    
    # Add styling guidelines
    prompt += "产品应在一个真实的生活场景中展示，突出其先进的技术和用户友好的界面。"
    prompt += "背景应简洁干净，使用柔和的灯光突出产品的高级质感，色彩方案应以中性色调为主。图片应当清晰、逼真，使用专业的产品摄影风格。"
    
    return prompt

def process_all_products():
    """Process all product info files and generate images."""
    # Process each product info file (product_info_1.md to product_info_20.md)
    for product_num in range(1, 21):
        product_file = os.path.join(product_info_dir, f"product_info_{product_num}.md")
        
        if not os.path.exists(product_file):
            print(f"Warning: Product info file {product_file} not found. Skipping.")
            continue
        
        try:
            # Read the product info markdown
            with open(product_file, 'r', encoding='utf-8') as f:
                markdown_content = f.read()
            
            # Extract product information
            product_info = extract_product_info(markdown_content)
            product_id = product_info['id']
            
            # Create output directory for this product's images
            output_folder = os.path.join(images_output_base_dir, str(product_id))
            os.makedirs(output_folder, exist_ok=True)
            
            print(f"Processing product {product_id}: {product_info['title']}")
            
            # Generate the prompt for DALL-E
            prompt = generate_image_prompt(product_info)
            print(f"Generated prompt: {prompt}")
            
            # Generate images
            for i in range(num_images_per_product):
                print(f"Generating image {i+1}/{num_images_per_product}...")
                
                result = client.images.generate(
                    model="dall-e-3",
                    prompt=prompt,
                    n=1
                )

                image_url = json.loads(result.model_dump_json())['data'][0]['url']
                
                # Download and save the image
                response = requests.get(image_url)
                if response.status_code == 200:
                    file_path = os.path.join(output_folder, f"image_{i+1}.jpg")
                    with open(file_path, "wb") as f:
                        f.write(response.content)
                    print(f"Image {i+1} saved to {file_path}")
                else:
                    print(f"Failed to download image {i+1} for product {product_id}")
            
            print(f"Completed processing product {product_id}\n")
            
        except Exception as e:
            print(f"Error processing product {product_num}: {str(e)}")

if __name__ == "__main__":
    # Create base images directory if it doesn't exist
    os.makedirs(images_output_base_dir, exist_ok=True)
    
    # Process all products
    process_all_products()
    
    print("Image generation completed for all products.")