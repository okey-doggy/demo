import { useCallback, useMemo, useState } from "react";

export const useDate = () => {
  const today = useMemo(() => new Date(), []);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  // const handleDateChange = useCallback(
  //   (date: Date | null) => {
  //     if (date) {
  //       setStartDate(date);
  //     } else {
  //       setStartDate(today);
  //     }
  //   },
  //   [today]
  // );

  return {
    startDate,
    endDate,
    dateRange,
    setDateRange,
  };
};
