import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";

const Postcode = ({
  isOpen,
  handleComplete,
}: {
  isOpen: boolean;
  handleComplete: (data: { zonecode: string; roadAddress: string }) => void;
}) => {
  // Modal 스타일
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "100%",
      height: "100%",
      padding: "0",
      overflow: "hidden",
    },
  };

  return (
    <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
      <DaumPostcode onComplete={handleComplete} />
    </Modal>
  );
};

export default Postcode;
