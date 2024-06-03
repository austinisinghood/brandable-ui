"use client";

import { Basebar } from "@/app/components";

export const FooterBlock = (props: any) => {
  let footer;
  switch (props.model) {
    case 1:
      footer = <Basebar {...props} />;
      break;
    case 2:
      footer = <Basebar {...props} />;
      break;
    default:
      footer = <Basebar {...props} />;
  }

  return footer;
};
