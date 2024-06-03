import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./styles/Hanker.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  label: string;
}

const Radio = ({ className, name, label, ...rest }: InputProps) => {
  return (
    <div
      className={twMerge(
        `w-full h-fit flex flex-col items-center justify-center`,
        styles.inputContainer,
        className
      )}
    >
      <input
        name={name}
        className={twMerge(
          `transition-all ease-in-out duration-200`,
          styles.input
        )}
        {...rest}
      />
      <label
        htmlFor={name}
        className={twMerge(`text-ink label-text pt-2 cursor-pointer`)}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
