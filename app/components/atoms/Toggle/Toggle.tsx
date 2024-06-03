"use client";

import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useTheme } from "@/app/hooks/useTheme";

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variantSize?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "tertiary" | "accent" | "ink" | "paper";
}

export const Toggle: React.FC<ToggleSwitchProps> = ({
  label,
  variantSize = "md",
  color = "primary",
  ...props
}) => {
  const { styles } = useTheme();

  const toggleClassName = twMerge(
    styles.toggle,
    styles[variantSize],
    styles[color]
  );

  return (
    <div className="w-fit flex flex-row items-center justify-center">
      {label && (
        <span className={twMerge(styles.label, `label-text pr-2`)}>
          {label}
        </span>
      )}
      <label className={styles.toggleWrapper}>
        <input type="checkbox" className={toggleClassName} {...props} />
        <span className={twMerge(styles.slider, styles[color])}></span>
      </label>
    </div>
  );
};
