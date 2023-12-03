import { ITrainer } from "@/@types/matching/trainer/trainer";
import styles from "../Trainer.module.scss";
import { PriceClass } from "@/libs/price";

function TrainerInfo({
  trainer,
  handleSelect,
}: {
  trainer: ITrainer;
  handleSelect: (id: number) => void;
}) {
  const { training } = trainer;
  const price = new PriceClass(training.price);

  console.log(trainer);
  return (
    <div className={styles.card} onClick={() => handleSelect(training.id)}>
      <div className={styles.thumbnail}>
        <img src={training.thumbnail} alt="trainer" />
      </div>
      <div className={styles.trainerInfo}>
        <div className={styles.name}>{trainer.name}</div>
        <div className={styles.description}>
          <p className={styles.content}>
            {trainer.nickname}, {training.name}
          </p>
        </div>
        <div className={styles.price}>{price.priceFormat()}원/시간</div>
        <div className={styles.reviewCounts}>{training.reviews}개의 리뷰</div>
      </div>
    </div>
  );
}

export default TrainerInfo;
