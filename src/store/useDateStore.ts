import { create } from "zustand";

export type TDate = Date | null;
interface IDateStore {
  dateRange: [TDate, TDate];
  update: (newVal: [TDate, TDate]) => void;
}
export const useDateStore = create<IDateStore>()((set) => ({
  dateRange: [null, null],
  update: (newVal) => set({ dateRange: newVal }),
}));
