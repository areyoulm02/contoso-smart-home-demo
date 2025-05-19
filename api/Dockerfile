FROM python:3.12-slim

WORKDIR /api
# 直接引用 api 目录中的 requirements.txt
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]