import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useTheme } from "@/app/hooks/useTheme";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  label: string;
}

export const Radio = ({ className, name, label, id, ...rest }: InputProps) => {
  const { styles } = useTheme();

  return (
    <div
      className={twMerge(
        `w-fit h-fit flex flex-row items-center justify-center space-x-2`,
        styles.radioInputContainer,
        className
      )}
    >
      <input
        id={id}
        name={name}
        className={twMerge(
          `transition-all ease-in-out duration-200`,
          styles.input
        )}
        type="radio"
        {...rest}
      />
      <label
        htmlFor={id}
        className={twMerge(`text-ink label-text cursor-pointer`, styles.label)}
      >
        {label}
      </label>
    </div>
  );
};
