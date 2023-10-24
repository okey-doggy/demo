import React from "react";
import styles from "./Detail.module.scss";
import { trainings } from "@/constant/training";
import Accordion from "./accordion/Accordion";

function Detail() {
  //아코디언의 모음
  return (
    <div className={styles.contents}>
      <div className={styles.titlebox}>
        <h1 className={styles.title}>훈련을 선택해주세요.</h1>
        <p className={styles.subtitle}>중복 선택 가능해요.</p>
      </div>
      <section className={styles.section}>
        {trainings.map((training) =>
          training.data.map((item) => <Accordion {...item} />)
        )}
      </section>
    </div>
  );
}

export default Detail;
