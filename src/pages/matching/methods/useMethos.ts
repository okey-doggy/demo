import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { methods } from "@/constant/methods";

export const useMethods = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [clicked, setClicked] = useState(new Array(methods.length).fill(false));

  const isPlacePath = useMemo(() => pathname.includes("place"), [pathname]);
  const isDatePath = useMemo(() => pathname.includes("date"), [pathname]);

  const goBack = () => navigate(-1);
  const pathTitle = (path: string) => {
    switch (path) {
      case "/matching/methods/place":
        return "바둑이가 훈련 받을 수 있는 장소를 알려주세요.";
      case "/matching/methods/date":
        return "훈련 가능일";
      default:
        return "훈련 방법";
    }
  };

  const handleNextClick = () => {
    if (isPlacePath) return navigate("/matching/methods/date");
    if (isDatePath) return navigate("/matching/training");
    return navigate("/matching/methods/place");
  };

  const isCompleteButtonDisabled = useMemo(
    () => clicked.every((_) => _ === false),
    [clicked]
  );

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
