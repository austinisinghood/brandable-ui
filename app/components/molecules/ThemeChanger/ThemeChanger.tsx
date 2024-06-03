import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { themeStore } from "@/app/store";

import { FaCode } from "react-icons/fa";

export const ThemeChanger = () => {
  const { theme, setTheme } = themeStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <pre className="z-50 fixed bottom-6 right-6 h-[45px] flex flex-row items-center justify-center bg-paper px-4 py-2 rounded-lg shadow-sm">
        <button className="" onClick={() => setIsOpen(!isOpen)}>
          <FaCode className="text-ink" />
        </button>
        {isOpen && (
          <div className="w-fit pl-4 space-x-2">
            <button
              className={twMerge(
                `text-ink`,
                theme === "default" && "text-lime-500"
              )}
              onClick={() => setTheme("default")}
            >
              Default
            </button>
            <button
              className={twMerge(
                `text-ink`,
                theme === "fancy" && "text-lime-500"
              )}
              onClick={() => setTheme("fancy")}
            >
              Fancy
            </button>
          </div>
        )}
      </pre>
    </>
  );
};
