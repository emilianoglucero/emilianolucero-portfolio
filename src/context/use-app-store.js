import { create } from "zustand"

export const useAppStore = create(set => ({
  menuIsOpen: false,
  setMenuIsOpen: menuIsOpen => set({ menuIsOpen }),
  videoLoaded: false,
  setVideoLoaded: videoLoaded => set({ videoLoaded }),
}))
