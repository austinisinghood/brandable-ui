import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./styles/Hanker.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input = ({ name, label, ...rest }: InputProps) => {
  const isRequired = rest.required ? "* Field is required" : "";

  return (
    <div className={twMerge(`relative w-full flex flex-col pb-6`)}>
      <label
        htmlFor={name}
        className={twMerge(`w-full label-text text-ink pt-12 pb-4`)}
      >
        {label}
      </label>
      <input
        name={name}
        className={twMerge(
          `w-full talk text-ink-dark bg-transparent p-2 border-b-4 border-ink indent-4 outline-none hover:border-accent focus:border-accent transition-all ease-in-out duration-200 sm:indent-2`,
          styles.textInput
        )}
        {...rest}
      />
      <span className="pt-3 whisper text-ink-light">{isRequired}</span>
    </div>
  );
};

export default Input;
