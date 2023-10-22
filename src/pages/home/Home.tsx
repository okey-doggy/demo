import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { delay } from "lodash";

import Layout from "../../layout/Layout";
import styles from "./Home.module.scss";
import Dogs from "../../assets/images/dogs.svg";

interface IProps {}

function Home({ ...props }: IProps) {
  const navigate = useNavigate();
  useEffect(() => {
    // delay(() => navigate("/matching/buddy"), 5000);
  });

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>환영합니다!</h1>
        <div>
          <img src={Dogs} alt="dogs" style={{ width: 400, height: 300 }} />
        </div>
        <button>바로 시작하기</button>
      </div>
    </Layout>
  );
}

export default Home;
