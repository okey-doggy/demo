import { ITrainer } from "@/@types/matching/trainer/trainer";
import styles from "../Trainer.module.scss";

function TrainerInfo(trainer: ITrainer) {
  const { training } = trainer;
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img src={training.thumbnail} alt="trainer" />
      </div>
      <div className={styles.trainerInfo}>
        <div className={styles.name}>{trainer.name}</div>
        <div className={styles.description}>
          <p>
            {trainer.nickname}, {training.description}
          </p>
        </div>
        <div className={styles.price}>{training.price}원/시간</div>
        <div className={styles.reviewCounts}>{training.reviews}개의 리뷰</div>
      </div>
    </div>
  );
}

export default TrainerInfo;
