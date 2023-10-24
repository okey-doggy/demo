import React, { Fragment } from "react";
import Layout from "@/layout/Layout";
import styles from "./SelectTraining.module.scss";
import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import { training } from "@/constant/training";
import Education from "@/components/pages/matching/select-training/Education";

function SelectTraining() {
  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators active={1} />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>훈련을 선택해주세요.</h1>
            <p className={styles.subtitle}>
              우리 강아지에게 적합한 교육을 선택해 주세요.
            </p>
          </div>
          <section className={styles.section}>
            {training.map((item) => (
              <Fragment key={item.id}>
                <Education title={item.title} description={item.description} />
              </Fragment>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default SelectTraining;
