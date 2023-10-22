import React, { useEffect, useState } from "react";
import styles from "./ProfileCard.module.scss";
import axios from "axios";

function ProfileCard() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://api.unsplash.com/");
  }, []);
  return (
    <div className={styles.card}>
      <img src="/" alt="강아지 프로필" />
      <p>강아지 이름</p>
    </div>
  );
}

export default ProfileCard;
