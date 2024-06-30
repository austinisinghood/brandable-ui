import { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useTheme } from "@/app/hooks/useTheme";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export const Textarea = ({ name, label, ...rest }: TextareaProps) => {
  const { styles } = useTheme();

  const isRequired = rest.required ? "* Field is required" : "";

  return (
    <div
      className={twMerge(
        `w-full`,
        styles.textareaContainer,
        styles.textareaContainer
      )}
    >
      <label htmlFor={name} className={twMerge(`label-text`, styles.label)}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        className={twMerge(`chat`, styles.textarea)}
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
