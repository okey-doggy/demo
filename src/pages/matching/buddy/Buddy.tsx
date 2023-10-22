import React, { useState, useEffect } from "react";
import styles from "./Buddy.module.scss";
import axios from "axios";

import ProfileCard from "@/components/pages/matching/buddy/ProfileCard";
import Layout from "@/layout/Layout";
import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import Loading from "@/Loading";

export interface IProfile {
  id: string;
  url: string;
  alt_description: string;
  title: string;
}

function Buddy() {
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos?page=1&query=dog", {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_CLIENT_ID}`,
        },
      })
      .then((res) => {
        const results = res.data.results; // Corrected property name
        if (results && results.length > 0) {
          setProfiles((prev) => {
            // Check for duplicate IDs and only add unique profiles
            const uniqueResults = results.filter(
              (result: typeof results) =>
                !prev.some((profile) => profile.id === result.id)
            );

            // Concatenate the unique results with the previous profiles
            return [
              ...prev,
              ...uniqueResults.map((result: typeof results) => ({
                id: result.id,
                url: result.urls.raw,
                alt_description: result.alt_description,
                title: result.description,
              })),
            ];
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>훈련받을 반려견을 선택해주세요.</h1>
            <p className={styles.subtitle}>
              훈련 내용이 같으면 2마리 이상의 강아지를 중복 선택할 수 있어요.
            </p>
          </div>
          <section className={styles.section}>
            {loading ? <Loading /> : <ProfileCard profiles={profiles} />}
            <button className={(styles.cancel, styles.button)}>
              반려견 추가 등록
            </button>
            <button className={(styles.ok, styles.button)}>확인</button>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Buddy;
