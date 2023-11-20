import { useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import styles from "./Methods.module.scss";

import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";
import Content from "@/components/pages/matching/methods/content/Content";
import { useMethods } from "./useMethos";

function Methods() {
  const {
    isPlacePath,
    isDatePath,
    methods,
    clicked,
    setClicked,
    pathTitle,
    pathname,
    isCompleteButtonDisabled,
    handleNextClick,
    goBack,
  } = useMethods();
  const renderContent = () => {
    if (isPlacePath || isDatePath) {
      return <Outlet />;
    } else {
      return (
        <Content methods={methods} clicked={clicked} setClicked={setClicked} />
      );
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators active={2} />
        </Header>
        <div className={styles.contents}>
          <div className={styles.titlebox}>
            <h1 className={styles.title}>훈련 장소와 방법을 선택해주세요.</h1>
            <p className={styles.subtitle}>{pathTitle(pathname)}</p>
          </div>
          <section className={styles.section}>{renderContent()}</section>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.before} onClick={goBack}>
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
