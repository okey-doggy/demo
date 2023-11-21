import styles from "./Place.module.scss";
import Underline from "@/assets/images/underline.svg";
import { usePlace } from "./usePlace";
import Postcode from "@/components/pages/matching/methods/postcode/Postcode";

function Place() {
  const { address, ...place } = usePlace();

  return (
    <>
      <div className={styles.textbox}>
        <input
          type="text"
          readOnly
          value={address.roadAddress}
          className={styles.textarea}
          placeholder="우편번호 검색"
          onClick={place.handleToggle}
        />
        <img src={Underline} alt="underline" className={styles.underline} />
      </div>
      <div className={styles.textbox}>
        <input
          type="text"
          className={styles.textarea}
          placeholder="상세주소 입력 (선택)"
          onChange={place.handleChange}
          value={address.detailAddress}
        />
        <img src={Underline} alt="underline" className={styles.underline} />
        <Postcode isOpen={place.isOpen} handleComplete={place.handleComplete} />
      </div>
    </>
  );
}

export default Place;
