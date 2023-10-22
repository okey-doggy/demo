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
        }}
      >
        <span
          style={{
            display: "block",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Spinner />
        </span>
      </div>
    </Layout>
  );
}

export default Loading;
