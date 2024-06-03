import { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./styles/Hanker.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea = ({ name, label, ...rest }: TextareaProps) => {
  const isRequired = rest.required ? "* Field is required" : "";

  return (
    <div className={twMerge(`w-full flex flex-col pb-6`)}>
      <label
        htmlFor={name}
        className={twMerge(`w-full label-text text-ink pt-12 pb-4`)}
      >
        {label}
      </label>
      <textarea
        name={name}
        className={twMerge(
          `w-full h-48 talk text-ink-dark bg-transparent p-2 border-b-4 border-ink indent-4 outline-none resize-none hover:border-accent focus:border-accent transition-all ease-in-out duration-200 sm:indent-2`,
          styles.textArea
        )}
        {...rest}
      />
      <span className="pt-3 whisper text-ink-light">{isRequired}</span>
    </div>
  );
};

export default Textarea;
