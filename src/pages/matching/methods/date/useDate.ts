import { useCallback, useMemo, useState } from "react";

export const useDate = () => {
  const today = useMemo(() => new Date(), []);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = useCallback((update: [Date | null, Date | null]) => {
    const isNotNull = update.some((date) => date !== null);
    isNotNull && setDateRange(update);
  }, []);

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
