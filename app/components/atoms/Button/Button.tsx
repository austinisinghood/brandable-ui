"use client";

import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useTheme } from "@/app/hooks/useTheme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "tertiary" | "accent" | "ink" | "paper";
  variant?: "outline" | "solid" | "ghost";
  active?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  size,
  color,
  variant,
  active,
  ariaLabel,
  ...props
}) => {
  const { styles } = useTheme();

  const sizeClass = size ? styles[size] : "";
  const variantClass = variant ? styles[variant] : styles.solid;
  const activeClass = active ? styles.active : "";
  const colorClass = color ? styles[color] : "";

  const buttonClassName = twMerge(
    styles.button,
    sizeClass,
    variantClass,
    activeClass,
    colorClass,
    className
  );

  return (
    <button
      className={twMerge(buttonClassName, styles.buttonWrapper, `button-text`)}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      aria-pressed={active}
      {...props}
    >
      <div
        className={twMerge(
          styles.buttonContainer,
          "w-fit h-fit flex items-center justify-center"
        )}
      >
        {children}
      </div>
    </button>
  );
};
