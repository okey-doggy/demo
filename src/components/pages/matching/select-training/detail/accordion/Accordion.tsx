import React from "react";
import styles from "./Accordion.module.scss";

interface IAccordion {
  id: number;
  title: string;
  description: string;
}
function Accordion(item: IAccordion) {
  return (
    <div className={styles.accordion}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.description}>
        {item.description}
        <div className={styles.dropdown}></div>
      </div>
    </div>
  );
}

export default Accordion;
