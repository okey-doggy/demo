import React from "react";
import styles from "./ProfileCard.module.scss";
import { IProfile } from "@/pages/matching/buddy/Buddy";

interface IProps {
  profiles: IProfile[];
}

function ProfileCard({ profiles }: IProps) {
  return (
    <>
      {profiles.map((profile) => (
        <div className={styles.card} key={profile.id}>
          <img src={profile.url} alt={profile.alt_description} />
          <p>{profile.title}</p>
        </div>
      ))}
    </>
  );
}

export default ProfileCard;
