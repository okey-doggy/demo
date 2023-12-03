import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import Layout from "@/layout/Layout";
import styles from "./Trainer.module.scss";
import TrainerInfo from "../../../components/pages/matching/trainer/TrainerInfo";
import { useTrainer } from "./useTrainer";

function Trainer() {
  const { trainers, handleSelect } = useTrainer();

  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators active={3} />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>훈련사를 선택해주세요.</h1>
          </div>
          <section className={styles.section}>
            {trainers.map((trainer) => (
              <TrainerInfo
                key={trainer.id}
                trainer={trainer}
                handleSelect={handleSelect}
              />
            ))}
          </section>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.before}>이전</button>
          <button className={styles.complete}>완료</button>
        </div>
      </div>
    </Layout>
  );
}

export default Trainer;
