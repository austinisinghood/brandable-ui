"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Typography = () => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full max-w-screen-2xl flex flex-col items-start justify-center mx-auto">
      <div
        className="w-full flex items-center justify-between cursor-pointer pt-12"
        onClick={toggleExpand}
      >
        <label className="w-full flex flex-row items-center justify-start cursor-pointer">
          <span className="label-text">Typography</span>
        </label>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <hr className="w-full my-6" />
      {isExpanded && (
        <div className="w-full flex flex-col items-start bg-white border border-zinc-200 pt-6 px-6 pb-24 rounded-md">
          <h1 className="roar text-ink pt-6">
            Level-up your brand at Austin Isinghood
          </h1>
          <code className="mb-4">.roar</code>
          <h2 className="hollar text-ink pt-6">
            Level-up your brand at Austin Isinghood
          </h2>
          <code className="mb-4">.hollar</code>
          <h3 className="scream text-ink pt-6">
            Level-up your brand at Austin Isinghood
          </h3>
          <code className="mb-4">.scream</code>
          <h4 className="shout text-ink pt-6">
            Level-up your brand at Austin Isinghood
          </h4>
          <code className="mb-4">.shout</code>
          <h5 className="yell text-ink pt-6">
            Level-up your brand at Austin Isinghood
          </h5>
          <code className="mb-4">.yell</code>
          <h6 className="talk text-ink pt-6">
            Level-up your brand at Austin Isinghood. Level-up your brand at
            Hanker House. Level-up your brand at Austin Isinghood.
          </h6>
          <code className="mb-4">.talk</code>
          <p className="chat text-ink pt-6">
            Level-up your brand at Austin Isinghood. Level-up your brand at
            Hanker House. Level-up your brand at Austin Isinghood.
          </p>
          <code className="mb-4">.chat</code>
          <p className="whisper text-ink pt-6">
            Level-up your brand at Austin Isinghood. Level-up your brand at
            Hanker House. Level-up your brand at Austin Isinghood.
          </p>
          <code className="mb-4">.whisper</code>
        </div>
      )}
    </div>
  );
};
