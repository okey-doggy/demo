import React from "react";
import Spinner from "@/assets/images/spinner.gif";
import Layout from "./layout/Layout";

function Loading() {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
        }}
      >
        <img src={Spinner} alt="spinner" />
      </div>
    </Layout>
  );
}

export default Loading;
