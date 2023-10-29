import { useState } from "react";

export const usePlace = () => {
  const [zipCode, setZipcode] = useState<string>("");
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleComplete = (data: { zonecode: string; roadAddress: string }) => {
    setZipcode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  const handleClick = () => {
    if (detailAddress === "") {
      alert("상세주소를 입력해주세요.");
    } else {
      console.log(zipCode, roadAddress, detailAddress);
    }
  };

  return {
    zipCode,
    roadAddress,
    detailAddress,
    isOpen,
    handleComplete,
    handleToggle,
    handleChange,
    handleClick,
  };
};
