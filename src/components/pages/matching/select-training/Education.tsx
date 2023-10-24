import React, { useState } from "react";
import styles from "./Education.module.scss";

interface IEducation {
  title: string;
  description: string;
}

function Education({ ...props }: IEducation) {
  const [clicked, setClicked] = useState(false);

  return (
    <article
      className={`${styles.article} ${clicked ? styles.clicked : ""}`}
      onClick={() => setClicked(!clicked)}
    >
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </article>
  );
}

export default Education;
