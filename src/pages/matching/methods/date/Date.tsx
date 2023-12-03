import Underline from "@/assets/images/underline.svg";
import styles from "./Date.module.scss";
import Calender from "../../../../components/pages/matching/methods/date/Calendar/Calender";
import { createPortal } from "react-dom";
import useCalendarModalStore from "@/store/useCalendarModalStore";
import { useDateStore } from "@/store/useDateStore";
import { DateClass } from "@/libs/date";

function Date() {
  const { isOpen, open, close } = useCalendarModalStore();
  const { dateRange } = useDateStore();
  const [startDate, endDate] = dateRange;

  const sDate = startDate && new DateClass(startDate);
  const eDate = endDate && new DateClass(endDate);
  return (
    <>
      <div className={styles.textbox}>
        <input
          type="text"
          readOnly
          className={styles.textarea}
          placeholder="2023년 9월 9일 ~ 2023년 9월 9일"
          value={
            startDate && endDate
              ? `${sDate?.dateTemplate()} ~ ${eDate?.dateTemplate()}`
              : ""
          }
          onClick={open}
        />

        <img src={Underline} alt="underline" className={styles.underline} />
        {isOpen && createPortal(<Calender close={close} />, document.body)}
      </div>
    </>
  );
}

export default Date;
