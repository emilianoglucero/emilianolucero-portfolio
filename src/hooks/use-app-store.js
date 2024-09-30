import { create } from "zustand"

export const useAppStore = create(set => ({
  isIntroComplete: false,
  setIsIntroComplete: isComplete => set({ isIntroComplete: isComplete }),
}))
