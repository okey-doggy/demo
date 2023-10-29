import { useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import styles from "./Methods.module.scss";

import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import Content from "@/components/pages/matching/methods/content/Content";
import { methods } from "@/constant/methods";

function Methods() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [clicked, setClicked] = useState(new Array(methods.length).fill(false));

  const isPlacePath = useMemo(() => pathname.includes("place"), [pathname]);

  const renderContent = () => {
    if (isPlacePath) {
      return <Outlet />;
    } else {
      return (
        <Content methods={methods} clicked={clicked} setClicked={setClicked} />
      );
    }
  };

  const handleNextClick = () => {
    navigate("/matching/methods/place");
  };

  const isCompleteButtonDisabled = useMemo(
    () => clicked.every((_) => _ === false),
    [clicked]
  );

  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators active={2} />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>훈련 장소와 방법을 선택해주세요.</h1>
            <p className={styles.subtitle}>
              {isPlacePath
                ? "바둑이가 훈련 받을 수 있는 장소를 알려주세요."
                : "훈련 방법"}
            </p>
          </div>
          <section className={styles.section}>{renderContent()}</section>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.before} onClick={() => navigate(-1)}>
            이전
          </button>
          <button
            className={styles.complete}
            disabled={isCompleteButtonDisabled}
            onClick={handleNextClick}
          >
            다음
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Methods;
