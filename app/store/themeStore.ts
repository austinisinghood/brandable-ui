import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = any; // Fix this type

export const themeStore: ThemeStore = create(
  persist(
    (set) => ({
      theme: "default",
      setTheme: (theme: string) => set({ theme }),
    }),
    {
      name: "theme-settings",
    }
  )
);
