import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import styles from "./Methods.module.scss";

import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";

function Methods() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators active={2} />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>훈련 장소와 방법을 선택해주세요.</h1>
            <p className={styles.subtitle}></p>
          </div>
          <section className={styles.section}></section>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.before} onClick={() => navigate(-1)}>
            이전
          </button>
          <button className={styles.complete}>다음</button>
        </div>
      </div>
    </Layout>
  );
}

export default Methods;
