import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Accordions.module.scss";
import Layout from "@/layout/Layout";
import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import { trainings } from "@/constant/training";

function Accordion() {
  const { id } = useParams();
  const index = parseInt(id as string);
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
              <div key={item.id} className={styles.wrapper}>
                <div
                  className={styles.accordion}
                  onClick={() =>
                    setClicked((prev) => {
                      const temp = [...prev];
                      temp[item.id] = !temp[item.id];
                      return temp;
                    })
                  }
                >
                  <div className={styles.title}>{item.title}</div>
                  {clicked[i + 1] ? (
                    <div className={styles.select}></div>
                  ) : (
                    <div className={styles.dropdown}></div>
                  )}
                </div>
                {clicked[i + 1] && (
                  <p className={styles.description}>{item.description}</p>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Accordion;
