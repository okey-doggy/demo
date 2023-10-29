import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import styles from "./Training.module.scss";

import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import Education from "@/components/pages/matching/training/Education";
import { trainings } from "@/constant/training";

function Training() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<[boolean, boolean]>([false, false]);
  const [selectId, setSelectId] = useState<number | undefined>();
  const [selectIdx, setSelectIdx] = useState<number | undefined>();

  const handleClick = (id: number, index: number) => {
    setSelectId(id);
    setSelectIdx(index);
    setClicked((prev) => {
      const newState = [...prev] as [boolean, boolean];
      newState[index] = !newState[index];
      const [first, second] = newState;
      return first === second ? [index === 0, index === 1] : newState;
    });
  };

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
          <button className={styles.before} onClick={() => navigate(-1)}>
            이전
          </button>
          <button
            className={styles.complete}
            disabled={clicked[selectIdx as number] ? false : true}
            onClick={() => navigate(`/matching/detail/${selectId}`)}
          >
            선택 완료
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Training;
