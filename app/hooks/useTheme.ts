import { useEffect, useState } from "react";
import { themeStore } from "@/app/store/themeStore";

export function useTheme() {
  const { theme } = themeStore();
  const [styles, setStyles] = useState<any>(
    `@/app/styles/themes/default.module.scss`
  );

  useEffect(() => {
    async function loadStyle() {
      const style = await import(
        `@/app/styles/themes/${theme}/${theme}.module.scss`
      );
      setStyles(style);
    }

    loadStyle();
  }, [theme]);

  return {
    theme,
    styles,
  };
}
