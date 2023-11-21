import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import Layout from "@/layout/Layout";
import styles from "./Trainer.module.scss";

function Trainer() {
  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators active={4} />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>훈련사를 선택해주세요.</h1>
          </div>
        </div>
        <section className={styles.section}></section>
      </div>
    </Layout>
  );
}

export default Trainer;
