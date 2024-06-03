"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { FaChevronDown } from "react-icons/fa6";

import { useTheme } from "@/app/hooks/useTheme";

type AccordionProps = {
  panels: PanelProps[];
};

type PanelProps = {
  button: React.ReactNode;
  content: React.ReactNode;
};

export const Accordion = ({ panels }: AccordionProps) => {
  const { styles } = useTheme();

  const arrayLength = panels.length;
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (index: number) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (activePanel === index) {
      setActivePanel(null);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Duration of closing animation
    } else {
      if (activePanel !== null) {
        setActivePanel(null);
        setTimeout(() => {
          setActivePanel(index);
          setTimeout(() => {
            setIsAnimating(false);
          }, 150); // Duration of opening animation
        }, 300); // Duration of closing animation
      } else {
        setActivePanel(index);
        setTimeout(() => {
          setIsAnimating(false);
        }, 150); // Duration of opening animation
      }
    }
  };

  return (
    <div className={twMerge(`w-full p-6`, styles.accordionContainer)}>
      {panels.map((panel: PanelProps, index: number) => (
        <div key={index} className={twMerge(`w-full`, styles.accordionPanel)}>
          <button
            onClick={() => handleClick(index)}
            className="w-full flex justify-between items-center py-4 px-6 text-left"
          >
            {panel.button}
            <FaChevronDown
              className={twMerge(
                `text-xl transition-all duration-300 ease-in-out`,
                activePanel === index ? "rotate-180" : ""
              )}
            />
          </button>
          <div
            className={twMerge(
              `w-full overflow-hidden transition-all duration-300 ease-in-out`,
              activePanel === index ? `max-h-[1500px]` : `max-h-0`,
              index === arrayLength - 1 ? styles.lastItem : ""
            )}
          >
            <div className="w-full p-6">
              <div className="pb-4">{panel.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
