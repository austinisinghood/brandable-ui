"use client";

import React from "react";

import { Color } from "./components/Color/Color";
import { Typography } from "./components/Typography/Typography";

import { useTheme } from "@/app/hooks/useTheme";

const BrandDisplay = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <Typography />
      <Color />
    </div>
  );
};

export default BrandDisplay;
