import { useState } from "react";
import styles from "./Education.module.scss";
import { useNavigate } from "react-router-dom";

function Education({ ...props }) {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <article
      className={`${styles.article} ${clicked ? styles.clicked : ""}}`}
      onClick={() => {
        setClicked(!clicked);
        navigate(`/matching/detail/${props.id}`);
      }}
    >
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </article>
  );
}

export default Education;
