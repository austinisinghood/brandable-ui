"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Color = () => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full max-w-screen-2xl flex flex-col items-center justify-center mx-auto">
      <div
        className="w-full flex items-center justify-between cursor-pointer pt-12"
        onClick={toggleExpand}
      >
        <label className="w-full flex flex-row items-center justify-start cursor-pointer">
          <span className="label-text">Color</span>
        </label>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <hr className="w-full my-6" />
      {isExpanded && (
        <div className="w-full flex flex-col items-center bg-white border border-zinc-200 pt-6 px-6 pb-24 rounded-md sm:flex-row sm:justify-start sm:flex-wrap">
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-primary-dark mb-1 border" />
            <code className="mb-4">.primary-dark</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-primary mb-1 border" />
            <code className="mb-4">.primary</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-primary-light mb-1 border" />
            <code className="mb-4">.primary-light</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-secondary-dark mb-1 border" />
            <code className="mb-4">.secondary-dark</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-secondary mb-1 border" />
            <code className="mb-4">.secondary</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-secondary-light mb-1 border" />
            <code className="mb-4">.secondary-light</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-tertiary-dark mb-1 border" />
            <code className="mb-4">.tertiary-dark</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-tertiary mb-1 border" />
            <code className="mb-4">.tertiary</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-tertiary-light mb-1 border" />
            <code className="mb-4">.tertiary-light</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-accent-dark mb-1 border" />
            <code className="mb-4">.accent-dark</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-accent mb-1 border" />
            <code className="mb-4">.accent</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-accent-light mb-1 border" />
            <code className="mb-4">.accent-light</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-ink-dark mb-1 border" />
            <code className="mb-4">.ink-dark</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-ink mb-1 border" />
            <code className="mb-4">.ink</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-ink-light mb-1 border" />
            <code className="mb-4">.ink-light</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-paper-dark mb-1 border" />
            <code className="mb-4">.paper-dark</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-paper mb-1 border" />
            <code className="mb-4">.paper</code>
          </div>
          <div className="w-full p-2 sm:w-1/3">
            <div className="w-full h-[150px] bg-paper-light mb-1 border" />
            <code className="mb-4">.paper-light</code>
          </div>
        </div>
      )}
    </div>
  );
};
