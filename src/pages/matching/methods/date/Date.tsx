import React, { useState } from "react";

import Underline from "@/assets/images/underline.svg";
import styles from "./Date.module.scss";
import { useDate } from "./useDate";
import Calender from "./Calendar/Calender";
import { createPortal } from "react-dom";
import useCalendarModalStore from "@/store/useCalendarModalStore";

function Date() {
  const { isOpen, open, close } = useCalendarModalStore();

  return (
    <>
      <div className={styles.textbox}>
        <input
          type="text"
          readOnly
          className={styles.textarea}
          placeholder="2023년 9월 9일 ~ 2023년 9월 9일"
          onClick={open}
        />

        <img src={Underline} alt="underline" className={styles.underline} />
        {isOpen && createPortal(<Calender close={close} />, document.body)}
      </div>
    </>
  );
}

export default Date;
