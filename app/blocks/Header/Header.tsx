"use client";

import { Navbar } from "@/app/components";

export const HeaderBlock = (props: any) => {
  let header;
  switch (props.model) {
    case 1:
      header = <Navbar {...props} />;
      break;
    case 2:
      header = <Navbar {...props} />;
      break;
    default:
      header = <Navbar {...props} />;
  }

  return <Navbar {...props} />;
};
