import React from "react";
import styles from "./Buddy.module.scss";
import ProfileCard from "../../../components/service/matching/buddy/ProfileCard";
import Layout from "../../../layout/Layout";
import Header from "../../../components/common/header/Header";
import Indicators from "../../../components/common/indicators/Indicators";

function Buddy() {
  return (
    <Layout>
      <Header>
        <Indicators />
      </Header>
      <div className={styles.container}>
        <div>
          <h1>훈련받을 반려견을 선택해주세요.</h1>
          <p>훈련 내용이 같으면 2마리 이상의 강아지를 중복 선택할 수 있어요.</p>
        </div>
        <section className={styles.section}>
          <ProfileCard />
          <button className={(styles.cancel, styles.button)}>
            반려견 추가 등록
          </button>
          <button className={(styles.ok, styles.button)}>확인</button>
        </section>
      </div>
    </Layout>
  );
}

export default Buddy;
