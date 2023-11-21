import { usePlaceStore } from "@/store/usePlaceStore";
import { useState } from "react";

export const usePlace = () => {
  const {
    zipCode,
    roadAddress,
    detailAddress,
    isOpen,
    handleComplete,
    handleToggle,
    handleChange,
  } = usePlaceStore();

  const handleClick = () => {
    if (detailAddress === "") {
      alert("상세주소를 입력해주세요.");
    } else {
      console.log(zipCode, roadAddress, detailAddress);
    }
  };

  return {
    address: {
      zipCode,
      roadAddress,
      detailAddress,
    },
    isOpen,
    handleComplete,
    handleToggle,
    handleChange,
    handleClick,
  };
};
