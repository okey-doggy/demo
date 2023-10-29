import { useNavigate } from "react-router-dom";
import styles from "./Place.module.scss";
import Underline from "@/assets/images/underline.svg";

function Place() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.textbox}>
        <input
          type="text"
          className={styles.textarea}
          placeholder="우편번호 검색"
        />
        <img src={Underline} alt="underline" className={styles.underline} />
      </div>
      <div className={styles.textbox}>
        <input
          type="text"
          className={styles.textarea}
          placeholder="상세주소 입력 (선택)"
        />
        <img src={Underline} alt="underline" className={styles.underline} />
      </div>
    </>
  );
}

export default Place;
