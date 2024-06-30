"use client";

import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useTheme } from "@/app/hooks/useTheme";

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Toggle: React.FC<ToggleSwitchProps> = ({ label, ...props }) => {
  const { styles } = useTheme();

  const toggleClassName = twMerge(styles.toggle);

  return (
    <div className="w-fit flex flex-row items-center justify-center">
      {label && (
        <span className={twMerge(styles.label, `label-text pr-2`)}>
          {label}
        </span>
      )}
      <label className={styles.toggleWrapper}>
        <input type="checkbox" className={toggleClassName} {...props} />
        <span className={twMerge(styles.slider)}></span>
      </label>
    </div>
  );
};
