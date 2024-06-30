"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

import { useTheme } from "@/app/hooks/useTheme";

import { blocks } from "@/app/blocks";
import { ThemeChanger } from "components/molecules/ThemeChanger/ThemeChanger";

import "@/app/styles/fonts.scss";
import "@/app/styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  useEffect(() => {
    const loadThemeStyles = async () => {
      await import(`@/app/styles/themes/${theme}/globals.scss`);
    };
    loadThemeStyles();
  }, [theme]);

  const [isLoading, setIsLoading] = useState(true);
  const [fadeOutGif, setFadeOutGif] = useState(false);
  const [fadeOutBackground, setFadeOutBackground] = useState(false);

  useEffect(() => {
    const timerGif = setTimeout(() => {
      setFadeOutGif(true);
      const timerBackground = setTimeout(() => {
        setFadeOutBackground(true);
        setTimeout(() => setIsLoading(false), 1000);
      }, 500);
      return () => clearTimeout(timerBackground);
    }, 1500);

    return () => clearTimeout(timerGif);
  }, []);

  return (
    <html lang="en">
      <body className={`${theme}-theme-wrapper`}>
        {/* Loading screen */}
        {isLoading && (
          <div
            className={`z-50 fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black text-white ${
              fadeOutBackground ? "fade-out-background" : ""
            }`}
          >
            <Image
              src="/loading.gif"
              alt="Loading spinner"
              width={50}
              height={50}
              className={fadeOutGif ? "fade-out-gif" : ""}
            />
          </div>
        )}
        {!isLoading && (
          <div className="fadeIn">
            <blocks.HeaderBlock
              model={1}
              navItems={[
                { label: "Home", href: "/", type: "link" },
                {
                  label: "Brand",
                  href: "/documentation/brand-guide",
                  type: "link",
                },
                {
                  label: "UI",
                  href: "/documentation/ui-components",
                  type: "link",
                  subNavItems: [
                    {
                      label: "Components",
                      href: "/documentation/ui-components",
                      type: "link",
                    },
                    {
                      label: "Dev Mode",
                      href: "/documentation/dev-mode",
                      type: "button",
                    },
                  ],
                },
                { label: "Test Page", href: "test-page", type: "button" },
              ]}
              alert={<ThemeChanger />}
            />
            {children}
            <blocks.FooterBlock
              model={1}
              navItems={[
                { label: "Home", href: "/" },
                { label: "Brand", href: "/documentation/brand-guide" },
                { label: "UI", href: "/documentation/ui-components" },
              ]}
            />
          </div>
        )}
      </body>
      {/* Google Analytics */}
      <GoogleAnalytics
        gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
    </html>
  );
}
