import { useDateStore } from "@/store/useDateStore";
import { useCallback, useMemo } from "react";

export const useDate = () => {
  const today = useMemo(() => new Date(), []);
  const { dateRange, update } = useDateStore();
  const [startDate, endDate] = dateRange;

  const handleDateChange = useCallback(
    (newDate: [Date | null, Date | null]) => {
      const isNotNull = newDate.some((date) => date !== null);
      isNotNull && update(newDate);
    },
    [update]
  );

  const addMonths = (date: Date) => {
    return new Date(date.setMonth(date.getMonth() + 2));
  };

  return {
    startDate,
    endDate,
    dateRange,
    handleDateChange,
    addMonths,
  };
};
