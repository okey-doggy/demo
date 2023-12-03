import { ITrainer } from "@/@types/matching/trainer/trainer";
import { useCallback, useEffect, useState } from "react";

export const useTrainer = () => {
  const [trainers, setTrainers] = useState<ITrainer[]>([]);
  const [selectedId, setSelectedId] = useState<number>();

  const getTrainer = useCallback(async () => {
    try {
      await fetch("http://localhost:5173/api/trainer.json")
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            setTrainers((prev) => {
              const filtered = prev.filter((item) =>
                res.data.forEach((data: ITrainer) => item.id !== data.id)
              );

              return [...filtered, ...res.data];
            });
          } else {
            throw new Error(res.error);
          }
        });
    } catch (e) {
      const code = 404;
      console.error("trainer Error", e, code);
      alert("트레이너 정보를 불러오는데 실패했습니다.");
    }
  }, []);

  useEffect(() => {
    getTrainer();
  }, [getTrainer]);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  return { trainers, getTrainer, handleSelect };
};
