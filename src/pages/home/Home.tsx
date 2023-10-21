import React from "react";
import Layout from "../../layout/Layout";
import Header from "../../components/common/header/Header";
import Indicators from "../../components/common/indicators/Indicators";

interface IProps {}

function Home({ ...props }: IProps) {
  return (
    <Layout>
      <Header>
        <Indicators />
      </Header>
    </Layout>
  );
}

export default Home;
