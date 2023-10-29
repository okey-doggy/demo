import { useState } from "react";
import styles from "./Education.module.scss";

interface IEducation {
  id: number;
  title: string;
  description: string;
  index: number;
  clicked: [boolean, boolean];
  handleClick: (id: number, index: number) => void;
}
function Education({ ...props }: IEducation) {
  const { id, title, description, index, clicked, handleClick } = props;
  return (
    <article
      className={`${styles.article} ${clicked[index] ? styles.clicked : ""}`}
      onClick={() => handleClick(id, index)}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </article>
  );
}

export default Education;
