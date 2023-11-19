import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";

import { useDate } from "../useDate";
import "./Calendar.css";
import styles from "./Calendar.module.scss";

registerLocale("ko", ko);

function Calender({ close }: { close: () => void }) {
  const { startDate, endDate, handleDateChange, addMonths } = useDate();
  return (
    <div className={styles.modal}>
      <div className={styles.contents}>
        <div className={styles.titlebox}>
          <button className={styles.closeButton} onClick={close}>
            X
          </button>
          <h1 className={styles.title}>훈련 가능일 선택</h1>
          <p className={styles.subtitle}>
            훈련 가능한 범위의 날짜를 선택해주세요.
          </p>
        </div>
        <section className={styles.section}>
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            dateFormatCalendar="yyyy년 MM월"
            locale="ko"
            selected={startDate}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            maxDate={addMonths(new Date())}
            onChange={handleDateChange}
            monthsShown={3}
            inline
            showDisabledMonthNavigation
          />
        </section>
      </div>
    </div>
  );
}

export default Calender;
