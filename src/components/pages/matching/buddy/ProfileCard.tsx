import React, { WheelEventHandler, useEffect, useRef, useState } from "react";
import styles from "./ProfileCard.module.scss";
import { IProfile } from "@/pages/matching/buddy/Buddy";

interface IProps {
  profiles: IProfile[];
}

function ProfileCard({ profiles }: IProps) {
  const [selected, setSelected] = useState(
    new Array(profiles.length).fill(false)
  );
  const cardWrapperRef = useRef<HTMLDivElement>(null);

  // 마우스 휠 이벤트 핸들러
  const handleMouseWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    if (cardWrapperRef.current) {
      cardWrapperRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  useEffect(() => {
    console.count("ProfileCard rendered");
  });

  return (
    <div className={styles.cardWrapper} onWheel={handleMouseWheel}>
      {profiles.map((profile, i) => (
        <div className={styles.cardBox} key={profile.id}>
          <div className={styles.card}>
            {selected[i] && <div className={styles.selected}></div>}
            <div className={styles.default}>
              <img src={profile.url} alt={profile.alt_description} />
            </div>
          </div>
          <p className={styles.title}>{profile.title}</p>
        </div>
      ))}
    </div>
  );
}

const MemoizedProfileCard = React.memo(ProfileCard);
export default MemoizedProfileCard;
