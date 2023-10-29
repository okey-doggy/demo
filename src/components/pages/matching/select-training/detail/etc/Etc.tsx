import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Etc.module.scss";
import Layout from "@/layout/Layout";
import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import Underline from "@/assets/images/underline.svg";

function Etc() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators active={1} />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>문제 행동에 대해 설명해주세요.</h1>
            <p className={styles.subtitle}>(선택 입력)</p>
          </div>
          <section className={styles.section}>
            <input
              type="text"
              className={styles.textarea}
              placeholder="예) 밥을 안먹어요"
            />
            <img src={Underline} alt="underline" className={styles.underline} />
          </section>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.before} onClick={() => navigate(-1)}>
            이전
          </button>
          <button
            className={styles.complete}
            onClick={() => navigate(`/matching/methods`)}
          >
            다음
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Etc;
