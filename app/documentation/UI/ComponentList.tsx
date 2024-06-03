"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { Accordion, Button, Hero, Toggle, Roles } from "@/app/components";

interface CompProps {
  title: string;
  children: React.ReactNode;
}

const Comp = ({ title, children }: CompProps) => {
  return (
    <div className="w-full flex flex-col items-start justify-start pb-12">
      <code className="mb-4">{title}</code>
      {children}
    </div>
  );
};

const Components = () => {
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
        <label className="w-full label-text cursor-pointer">
          {theme} Components
        </label>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <hr className="w-full my-6" />
      {isExpanded && (
        <div className="w-full flex flex-col items-start justify-center space-y-4 px-3">
          <h3 className="yell text-ink py-6 text-center">Atoms:</h3>
          {/* Button */}
          <Comp title="<Button />">
            <Button
              color="accent"
              variant="solid"
              size="md"
              onClick={() => alert("You clicked me!")}
            >
              Test
            </Button>
          </Comp>
          {/* Toggle */}
          <Comp title="<Toggle />">
            <Toggle
              variantSize="lg"
              color="accent"
              label="Label"
              onChange={() => setTimeout(() => alert("You toggled me!"), 150)}
            />
          </Comp>
          <h3 className="yell text-ink py-6 text-center">Molecules:</h3>
          <h3 className="yell text-ink py-6 text-center">Organisms:</h3>
          <Comp title="<Accordion />">
            <Accordion
              panels={[
                {
                  button: <p className="shout text-ink">Question 1</p>,
                  content: <p className="talk text-ink">Answer 1</p>,
                },
                {
                  button: <p className="shout text-ink">Question 2</p>,
                  content: <p className="talk text-ink">Answer 2</p>,
                },
                {
                  button: <p className="shout text-ink">Question 3</p>,
                  content: <p className="talk text-ink">Answer 3</p>,
                },
              ]}
            />
          </Comp>
          <Comp title="<Hero />">
            <Hero
              alignment="left"
              backgroundColor="paper"
              textColor="ink"
              image={{
                asset: {
                  _ref: "image-897b88ca0965ee22927460ac64a8dcde1e10e3f2-1140x1140-jpg",
                },
                alt: "Test image",
              }}
              headline="Hero Component"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Habitant morbi tristique senectus et netus et malesuada fames."
              buttonColor="ink"
              buttonText="Button Text"
              buttonUrl="/test-link"
              linkColor="secondary"
              linkText="Link Text"
              linkUrl="/test-link"
            />
          </Comp>
          <Comp title="<Roles />">
            <Roles />
          </Comp>
        </div>
      )}
    </div>
  );
};

export default Components;
