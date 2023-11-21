import styles from "../Trainer.module.scss";

function TrainerInfo() {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}></div>
      <div className={styles.trainerInfo}>
        <div className={styles.name}>박지원</div>
        <div className={styles.description}>
          <p>버디엄마, 중대형견 트레이닝 전문</p>
        </div>
        <div className={styles.price}>30,000원/시간</div>
        <div className={styles.reviewCounts}>169개의 리뷰</div>
      </div>
    </div>
  );
}

export default TrainerInfo;
