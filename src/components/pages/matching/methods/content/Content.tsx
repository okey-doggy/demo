import React from "react";
import styles from "./Content.module.scss";

function Content({
  methods,
  clicked,
  setClicked,
}: {
  methods: { id: number; title: string }[];
  clicked: boolean[];
  setClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
}) {
  return (
    <>
      {methods.map((method, i) => (
        <div
          key={method.id}
          className={`${styles.wrapper} ${clicked[i] ? styles.clicked : ""}`}
          onClick={() => {
            setClicked((prev) => {
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
          <div className={styles.box}>
            <div className={styles.title}>{method.title}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Content;
