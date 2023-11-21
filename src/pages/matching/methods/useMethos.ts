import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { methods } from "@/constant/methods";
import { usePlaceStore } from "@/store/usePlaceStore";
import { useDateStore } from "@/store/useDateStore";
import { _DATE_PATH, _PLACE_PATH } from "./constants";

export const useMethods = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [clicked, setClicked] = useState(new Array(methods.length).fill(false));

  const isPlacePath = useMemo(() => pathname.includes("place"), [pathname]);
  const isDatePath = useMemo(() => pathname.includes("date"), [pathname]);

  const { zipCode, roadAddress, detailAddress } = usePlaceStore();
  const { dateRange } = useDateStore();

  const goBack = () => navigate(-1);
  const pathTitle = (path: string) => {
    switch (path) {
      case _PLACE_PATH:
        return "바둑이가 훈련 받을 수 있는 장소를 알려주세요.";
      case _DATE_PATH:
        return "훈련 가능일";
      default:
        return "훈련 방법";
    }
  };

  const handleNextClick = () => {
    if (isPlacePath) return navigate("/matching/methods/date");
    if (isDatePath) return navigate("/matching/trainer");
    return navigate("/matching/methods/place");
  };

  const isCompleteButtonDisabled = () => {
    if (isPlacePath) return disabledPlace;
    if (isDatePath) return disabledDate;
    return disabledMethods;
  };

  const disabledMethods = useMemo(
    () => clicked.every((_) => _ === false),
    [clicked]
  );

  const disabledPlace = useMemo(() => {
    return zipCode === "" || roadAddress === "" || detailAddress === "";
  }, [detailAddress, roadAddress, zipCode]);

  const disabledDate = useMemo(() => {
    return dateRange.some((_) => _ === null);
  }, [dateRange]);

  return {
    goBack,
    methods,
    clicked,
    setClicked,
    isPlacePath,
    isDatePath,
    pathTitle,
    pathname,
    handleNextClick,
    isCompleteButtonDisabled,
  };
};
