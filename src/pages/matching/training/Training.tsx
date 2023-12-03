import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import styles from "./Training.module.scss";

import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import Education from "@/components/pages/matching/training/Education";
import { useTraining } from "./useTraining";

function Training() {
  const { trainings, clicked, selectIdx, handleClick, goBack, goToNext } =
    useTraining();
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
                  clicked={clicked}
                  handleClick={handleClick}
                />
              </Fragment>
            ))}
          </section>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.before} onClick={goBack}>
            이전
          </button>
          <button
            className={styles.complete}
            disabled={clicked[selectIdx as number] ? false : true}
            onClick={goToNext}
          >
            선택 완료
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Training;
