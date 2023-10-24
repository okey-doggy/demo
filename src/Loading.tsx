import React from "react";
import Spinner from "@/assets/images/spinner.gif";
import Layout from "./layout/Layout";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        minWidth: "360px",
        minHeight: "640px",
        width: "360px",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Spinner} alt="spinner" />
      </div>
    </div>
  );
}

export default Loading;
