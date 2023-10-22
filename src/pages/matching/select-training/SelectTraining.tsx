import React from "react";
import Layout from "@/layout/Layout";
import styles from "./SelectTraining.module.scss";
import Header from "@/components/common/header/Header";
import Indicators from "@/components/common/indicators/Indicators";

function SelectTraining() {
  return (
    <Layout>
      <div className={styles.container}>
        <Header>
          <Indicators />
        </Header>
      </div>
    </Layout>
  );
}

export default SelectTraining;
