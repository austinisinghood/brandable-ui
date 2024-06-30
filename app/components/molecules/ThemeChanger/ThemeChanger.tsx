import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { themeStore } from "@/app/store";

import { FaCode } from "react-icons/fa";

export const ThemeChanger = () => {
  const { theme, setTheme } = themeStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-fit flex flex-row items-center justify-center mx-auto px-4 py-2">
        <button
          className="absolute z-50 w-full h-full flex items-center justify-center chat  bg-accent text-ink px-6 shadow-lg"
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
              `absolute z-40 w-fit min-w-[250px] h-fit flex flex-col items-start justify-start pt-[60px] pb-4 transition-all duration-300 ease-in-out`,
              isOpen ? "top-0" : "-top-[250px]",
              theme === "default" && "bg-tertiary-light rounded-md",
              theme === "fancy" && "bg-primary-dark rounded-md",
              theme === "retropop" && "bg-primary-light rounded-md"
            )}
          >
            <button
              className={twMerge(
                `w-full chat text-accent-light pt-2 pb-1 px-3`,
                theme === "default" && "bg-accent-light text-paper-light"
              )}
              onClick={() => setTheme("default")}
            >
              Default
            </button>
            <button
              className={twMerge(
                `w-full chat text-accent-light pt-2 pb-1 px-3`,
                theme === "fancy" && "bg-primary-light text-paper-light"
              )}
              onClick={() => setTheme("fancy")}
            >
              Fancy
            </button>
            <button
              className={twMerge(
                `w-full chat text-accent-light pt-2 pb-1 px-3`,
                theme === "retropop" && "bg-accent-light text-primary-dark"
              )}
              onClick={() => setTheme("retropop")}
            >
              Retropop
            </button>
          </div>
        </>
      </div>
    </>
  );
};
