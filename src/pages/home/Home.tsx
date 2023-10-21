import React from "react";
import Layout from "../../layout/Layout";
import Header from "../../components/common/header/Header";

interface IProps {}

function Home({ ...props }: IProps) {
  return (
    <Layout>
      <Header></Header>
    </Layout>
  );
}

export default Home;
