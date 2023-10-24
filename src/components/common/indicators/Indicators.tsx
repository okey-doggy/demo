import { useState } from "react";
import styles from "./Indicators.module.scss";
import Indicator from "./Indicator/Indicator.tsx";

interface IIndicators {
  active?: number;
}

function Indicators({ active }: IIndicators) {
  const [dots, setDots] = useState<number[]>(
    Array.from(new Array(5).fill(0), (x) => x + 1)
  );
  const [activeDot, setActiveDot] = useState(active ?? 0);

  return (
    <div className={styles.container}>
      {dots.map((_, index) => (
        <div
          key={index}
          className={styles.dot}
          onClick={() => setActiveDot(index)}
        >
          <Indicator color={activeDot === index ? "#6B6DFB" : "#DBDBDB"} />
        </div>
      ))}
    </div>
  );
}

export default Indicators;
