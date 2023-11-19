import React, { useState } from "react";

import Underline from "@/assets/images/underline.svg";
import styles from "./Date.module.scss";
import { useDate } from "./useDate";
import Calender from "./Calendar/Calender";

function Date() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className={styles.textbox}>
        <input
          type="text"
          readOnly
          className={styles.textarea}
          placeholder="2023년 9월 9일 ~ 2023년 9월 9일"
          onClick={() => setClicked(!clicked)}
        />

        <img src={Underline} alt="underline" className={styles.underline} />
        <Calender />
      </div>
    </>
  );
}

export default Date;
