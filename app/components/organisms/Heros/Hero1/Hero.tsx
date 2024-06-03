"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/utils";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

import { Button } from "@/app/components";

import { useTheme } from "@/app/hooks/useTheme";

type HeroProps = {
  alignment: "left" | "center" | "right";
  backgroundColor: "primary" | "secondary" | "accent" | "ink" | "paper";
  textColor: "primary" | "secondary" | "accent" | "ink" | "paper";
  image: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  headline: string;
  description: string;
  buttonColor: "primary" | "secondary" | "accent" | "ink" | "paper";
  buttonText?: string;
  buttonUrl?: string;
  linkColor?: "primary" | "secondary" | "accent" | "ink" | "paper";
  linkText?: string;
  linkUrl?: string;
};

export function Hero({
  alignment,
  backgroundColor,
  textColor,
  image,
  headline,
  description,
  buttonColor,
  buttonText,
  buttonUrl,
  linkColor,
  linkText,
  linkUrl,
}: HeroProps) {
  const { styles } = useTheme();

  return (
    <section
      className={twMerge(
        `w-full pt-36 pb-24 px-6`,
        classNames({
          "bg-primary-light": backgroundColor === "primary",
          "bg-secondary-light": backgroundColor === "secondary",
          "bg-accent-light": backgroundColor === "accent",
          "bg-ink-light": backgroundColor === "ink",
          "bg-paper-light": backgroundColor === "paper",
        }),
        classNames({
          "text-primary-dark": textColor === "primary",
          "text-secondary-dark": textColor === "secondary",
          "text-accent-dark": textColor === "accent",
          "text-ink-dark": textColor === "ink",
          "text-paper-light": textColor === "paper",
        }),
        styles.hero
      )}
    >
      <div
        className={twMerge(
          `w-full max-w-screen-xl flex flex-col items-center justify-center mx-auto text-center`,
          alignment === "left" && `md:flex-row md:text-left`,
          alignment === "right" && `md:flex-row-reverse md:text-left`
        )}
      >
        {image && image.asset && (
          <Image
            className={twMerge(
              `w-full my-6 md:w-1/2`,
              alignment === "center" && `max-w-sm`
            )}
            src={urlFor(image.asset).url()}
            alt={image.alt}
            width={500}
            height={300}
          />
        )}
        <div
          className={twMerge(
            `w-full md:w-1/2 md:pr-6`,
            alignment === "center" && `md:pr-0`,
            alignment === "left" && `md:pl-6`
          )}
        >
          <h1 className="hollar pb-6 text-balance">{headline}</h1>
          <p className="talk pb-12 text-balance">{description}</p>
          <div className="w-full flex flex-col gap-y-4">
            {buttonText && (
              <Link href={buttonUrl || "/"}>
                <Button color={buttonColor} variant="solid" size="md">
                  {buttonText}
                </Button>
              </Link>
            )}
            {linkText && (
              <Link
                className={twMerge(
                  classNames({
                    "text-primary": linkColor === "primary",
                    "text-secondary": linkColor === "secondary",
                    "text-accent": linkColor === "accent",
                    "text-ink": linkColor === "ink",
                    "text-paper": linkColor === "paper",
                  })
                )}
                href={linkUrl || "/"}
              >
                <Button color={linkColor} variant="ghost" size="md">
                  {linkText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
