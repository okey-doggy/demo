import {useState} from "react";
import styles from "./Indicators.module.scss";
import Indicator from "./Indicator/Indicator.tsx";

type TIndicators = {}

function Indicators({...props}: TIndicators) {
  const [dots, setDots] = useState<number[]>(new Array(5).fill(0));
  const [activeDot, setActiveDot] = useState(0);

  return (<div className={styles.container}>
    {dots.map((_, index) => <div
      key={index}
      className={styles.dot}
      onClick={() => setActiveDot(index)}
    >
      <Indicator/>
    </div>)}
  </div>);
}


export default Indicators;
