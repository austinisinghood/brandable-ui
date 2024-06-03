import React, { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./styles/Hanker.module.scss";

interface DropdownProps {
  label: string;
  options: string[];
  name: string;
  required?: boolean;
}

const Dropdown = ({
  label,
  options,
  name,
  required = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={twMerge("relative w-full flex flex-col pb-6")}
      ref={dropdownRef}
    >
      <label className={twMerge("w-full label-text text-ink pt-12 pb-4")}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={twMerge(
          "cursor-pointer talk text-ink-dark bg-transparent p-2 border-b-4 border-ink outline-none transition-all ease-in-out duration-200 sm:indent-2",
          styles.selectInput
        )}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption || "Select an option"}
      </div>
      {isOpen && (
        <ul className="z-10 absolute w-full bg-paper-light mt-36 border-ink rounded-lg border-4 shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className={twMerge(
                "label-text text-ink px-6 py-4 cursor-pointer first:rounded-t-sm last:rounded-b-sm hover:bg-ink hover:text-paper-light",
                selectedOption === option
                  ? "bg-ink text-paper-light"
                  : "bg-paper-light"
              )}
              onClick={() => handleSelect(option)}
              role="option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <input
        type="hidden"
        name={name}
        value={selectedOption}
        required={required}
      />
    </div>
  );
};

export default Dropdown;
