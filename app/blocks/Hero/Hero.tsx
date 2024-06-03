"use client";

import { Hero } from "@/app/components/organisms/Heros/Hero1/Hero";

export const HeroBlock = (props: any) => {
  let hero;
  switch (props.model) {
    case 1:
      hero = <Hero {...props} />;
      break;
    case 2:
      hero = <Hero {...props} />;
      break;
    default:
      hero = <Hero {...props} />;
  }

  return <Hero {...props} />;
};
