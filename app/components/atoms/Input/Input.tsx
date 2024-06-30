import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useTheme } from "@/app/hooks/useTheme";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  const { styles } = useTheme();

  const isRequired = rest.required ? "* Field is required" : "";

  return (
    <div
      className={twMerge(
        `w-full`,
        styles.inputContainer,
        styles.inputContainer
      )}
    >
      <label htmlFor={name} className={twMerge(`label-text`, styles.label)}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        className={twMerge(`chat`, styles.textInput)}
        {...rest}
      />
      {isRequired && (
        <span className={twMerge(`whisper`, styles.requiredMessage)}>
          {isRequired}
        </span>
      )}
    </div>
  );
};
