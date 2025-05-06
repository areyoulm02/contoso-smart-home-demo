import styles from "./page.module.css";
import Block from "@/components/block";
import { getCategories } from "@/store/products";
import Chat from "@/components/messaging/chat";
import Section from "@/components/section";
import Voice from "@/components/messaging/voice";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Home = async () => {
  const categories = getCategories();

  return (
    <>
      <Header />
      <Block outerClassName={styles.heroContent}>
        <div className={styles.heroTitle}>Contoso智能家居</div>
        <div className={styles.heroText}>
          科技轻语处，此处即吾家 | Where Technology Whispers HOME
        </div>
        <div className={styles.heroSubText}>
          {/* Where Technology Whispers 'Home' */}
        </div>
        <div className={styles.heroSubText}>
          选择多样化的智能设备，改变您的家居体验;
          从安防到自动化，从娱乐到舒适，我们应有尽有。
        </div>
      </Block>
      <>
        {categories.map((category, i) => (
          <Section key={category.slug} index={i} category={category} />
        ))}
      </>
      <Chat options={{ video: true, file: true }} />
      <Voice />
      <Footer />
    </>
  );
};

export default Home;
