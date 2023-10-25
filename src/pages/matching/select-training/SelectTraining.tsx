import React, { Fragment } from "react";
import Layout from "@/layout/Layout";
import styles from "./SelectTraining.module.scss";
import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import { trainings } from "@/constant/training";
import Education from "@/components/pages/matching/select-training/Education";
import { Outlet } from "react-router-dom";

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
            {trainings.map((item, idx) => (
              <Fragment key={item.id}>
                <Education
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  index={idx}
                />
              </Fragment>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default SelectTraining;
