import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Accordions.module.scss";
import Layout from "@/layout/Layout";
import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import { trainings } from "@/constant/training";

function Accordion() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = parseInt(id as string) - 1;

  const [selectClicked, setSelectClicked] = useState(
    new Array(trainings[index].data.length).fill(false)
  );
  const [clicked, setClicked] = useState(
    new Array(trainings[index].data.length).fill(false)
  );

  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators active={1} />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>훈련을 선택해주세요.</h1>
            <p className={styles.subtitle}>중복 선택 가능해요.</p>
          </div>
          <section className={styles.section}>
            {trainings[index].data.map((item, i) => (
              <div
                key={item.id}
                className={`${styles.wrapper} ${
                  selectClicked[i] ? styles.clicked : ""
                }`}
              >
                <div
                  className={styles.accordion}
                  onClick={() => {
                    setSelectClicked((prev) => {
                      const newClicked = prev.map((item, idx) => {
                        if (idx === i) {
                          return !item;
                        }
                        return false;
                      });

                      return newClicked;
                    });
                  }}
                >
                  <div className={styles.title}>{item.title}</div>
                  <div
                    className={`${
                      clicked[i] ? styles.select : styles.dropdown
                    }`}
                    onClick={() =>
                      setClicked((prev) => {
                        const temp = [...prev];
                        temp[item.id - 1] = !temp[item.id - 1];
                        return temp;
                      })
                    }
                  ></div>
                </div>
                {clicked[i] && (
                  <p className={styles.description}>{item.description}</p>
                )}
              </div>
            ))}
          </section>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.before} onClick={() => navigate(-1)}>
            이전
          </button>
          <button
            className={styles.complete}
            disabled={selectClicked.every((item) => item === false)}
            onClick={() => {
              selectClicked.lastIndexOf(true) === selectClicked.length - 1
                ? navigate(`/matching/detail/etc`)
                : navigate(`/matching/select-place`);
            }}
          >
            선택 완료
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Accordion;
