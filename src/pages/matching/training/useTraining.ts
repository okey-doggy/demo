import { trainings } from "./../../../constant/training";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useTraining = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<[boolean, boolean]>([false, false]);
  const [selectId, setSelectId] = useState<number | undefined>();
  const [selectIdx, setSelectIdx] = useState<number | undefined>();

  const goBack = () => [navigate(-1)];

  const goToNext = () => {
    navigate(`/matching/detail/${selectId}`);
  };
  const handleClick = (id: number, index: number) => {
    setSelectId(id);
    setSelectIdx(index);
    setClicked((prev) => {
      const newState = [...prev] as [boolean, boolean];
      newState[index] = !newState[index];
      const [first, second] = newState;
      return first === second ? [index === 0, index === 1] : newState;
    });
  };

  return {
    clicked,
    selectId,
    selectIdx,
    handleClick,
    trainings,
    goBack,
    goToNext,
  };
};
