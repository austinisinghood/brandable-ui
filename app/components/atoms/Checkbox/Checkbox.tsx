import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./styles/Hanker.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  label: string;
}

export const Checkbox = ({
  className,
  name,
  label,
  ...rest
}: CheckboxProps) => {
  return (
    <div
      className={twMerge(
        `w-full h-fit flex flex-col items-center justify-center`,
        styles.checkboxContainer,
        className
      )}
    >
      <input
        type="checkbox"
        id={name}
        name={name}
        className={twMerge(
          `transition-all ease-in-out duration-200`,
          styles.checkbox
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
