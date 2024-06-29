"use client";

import React from "react";

import { Color, Typography } from "@/app/documentation/brand";

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
