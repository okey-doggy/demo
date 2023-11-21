import { create } from "zustand";

interface IPlaceStore {
  zipCode: string;
  roadAddress: string;
  detailAddress: string;
  isOpen: boolean;
  handleComplete: (data: { zonecode: string; roadAddress: string }) => void;
  handleToggle: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const usePlaceStore = create<IPlaceStore>((set) => ({
  zipCode: "",
  roadAddress: "",
  detailAddress: "",
  isOpen: false,
  handleComplete: (data: { zonecode: string; roadAddress: string }) => {
    set(() => ({
      zipCode: data.zonecode,
      roadAddress: data.roadAddress,
      isOpen: false,
    }));
  },
  handleToggle: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    set(() => ({
      detailAddress: e.target.value,
    }));
  },
}));
