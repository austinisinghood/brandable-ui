import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { themeStore } from "@/app/store";

import { FaCode } from "react-icons/fa";

export const ThemeChanger = () => {
  const { theme, setTheme } = themeStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-fit flex flex-row items-center justify-center bg-zinc-500 mx-auto px-4 py-2">
        <button
          className="absolute z-50 w-full h-full flex items-center justify-center chat  bg-zinc-500 text-paper-light px-6 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaCode className="mr-2" /> Current Theme:{" "}
          <div className="ml-2">
            <code className="">{theme}</code>
          </div>
        </button>
        <>
          {isOpen && (
            <div
              className="absolute z-40 w-full h-screen top-0 left-0"
              onMouseOver={() => setIsOpen(false)}
            />
          )}
          <div
            className={twMerge(
              `absolute z-40 w-fit min-w-[250px] h-[150px] flex flex-col items-start justify-start bg-zinc-200 pt-[60px] pb-2 rounded-b-md transition-all duration-300 ease-in-out`,
              isOpen ? "top-0" : "-top-[150px]"
            )}
          >
            <button
              className={twMerge(
                `w-full text-zinc-400 chat py-1 px-3 border-b last-of-type:border-none`,
                theme === "default" && "text-white bg-zinc-500"
              )}
              onClick={() => setTheme("default")}
            >
              Default
            </button>
            <button
              className={twMerge(
                `w-full text-zinc-400 chat pt-2 pb-1 px-3 border-b last-of-type:border-none`,
                theme === "fancy" && "text-white bg-zinc-500"
              )}
              onClick={() => setTheme("fancy")}
            >
              Fancy
            </button>
          </div>
        </>
      </div>
    </>
  );
};
