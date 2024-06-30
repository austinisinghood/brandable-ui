"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";

import { Accordion, Button, Hero, Toggle, Roles } from "@/app/components";

interface CompProps {
  title: string;
  children: React.ReactNode;
}

const Comp = ({ title, children }: CompProps) => {
  return (
    <div className="w-full pt-6">
      <div className="relative w-full flex flex-col items-start justify-start bg-white border border-zinc-200 pt-6 px-6 pb-24 rounded-md">
        <div className="absolute -top-10 left-6 bg-zinc-200 pt-1 px-2 pb-3 rounded-t-md">
          <code className="">{title}</code>
        </div>
        {children}
      </div>
    </div>
  );
};

const ComponentInDevelopment = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-screen-2xl flex flex-col items-center justify-center mx-auto pt-12 pb-48">
      <div className="w-full flex flex-col items-start justify-center space-y-4 px-3">
        {/* Button */}
        <Comp title="dev_mode">
          <Button
            color="accent"
            variant="solid"
            size="md"
            onClick={() => alert("You clicked me!")}
          >
            Test
          </Button>
        </Comp>
        <h6 className="whisper">
          * This component is currently in development.
        </h6>
      </div>
    </div>
  );
};

export default ComponentInDevelopment;
