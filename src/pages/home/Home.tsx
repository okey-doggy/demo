import React from "react";
import { useNavigate } from "react-router-dom";

import Layout from "@/layout/Layout";
import styles from "./Home.module.scss";
import Dogs from "@/assets/images/dogs.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>환영합니다!</h1>
          <img src={Dogs} alt="dogs" style={{ width: 400, height: 300 }} />
        </div>
        <button
          className={styles.button}
          onClick={() => navigate("/matching/buddy")}
        >
          바로 시작하기
        </button>
      </div>
    </Layout>
  );
}

export default Home;
