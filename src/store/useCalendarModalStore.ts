import { create } from "zustand";
import { combine } from "zustand/middleware";

const useCalendarModalStore = create(
  combine({ isOpen: false }, (set) => {
    return {
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
    };
  })
);

export default useCalendarModalStore;
