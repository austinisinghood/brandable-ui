"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "@/app/hooks/useTheme";

import { Accordion, Button, Hero, Toggle, Roles } from "@/app/components";

interface CompProps {
  title: string;
  children: React.ReactNode;
}

interface TabProps {
  theme: string;
  labels: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Tabs = ({ labels, activeTab, setActiveTab }: TabProps) => {
  return (
    <div className="w-full flex items-center justify-start mb-12 border-b border-zinc-200">
      {labels.map((label, index) => (
        <button
          key={index}
          className={twMerge(
            "chat py-2 px-4 focus:outline-none",
            activeTab === index && "border-b-2 border-zinc-500 text-zinc-500",
            activeTab !== index && "text-zinc-300 hover:text-zinc-300"
          )}
          onClick={() => setActiveTab(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

const Comp = ({ title, children }: CompProps) => {
  return (
    <div className="w-full py-6">
      <div className="relative w-full flex flex-col items-start justify-start bg-white border border-zinc-200 pt-6 px-6 pb-24 rounded-md">
        <div className="absolute -top-10 left-6 bg-zinc-200 pt-1 px-2 pb-3 rounded-t-md">
          <code className="">{title}</code>
        </div>
        {children}
      </div>
    </div>
  );
};

const Components = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Atoms", "Molecules", "Organisms"];

  return (
    <div className="w-full max-w-screen-2xl flex flex-col items-center justify-center mx-auto">
      <Tabs
        theme={theme}
        labels={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="w-full flex flex-col items-start justify-center space-y-4 px-3">
        {activeTab === 0 && (
          <>
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
            <Comp title="<Toggle />">
              <Toggle
                variantSize="lg"
                color="accent"
                label="Label"
                onChange={() => setTimeout(() => alert("You toggled me!"), 150)}
              />
            </Comp>
          </>
        )}
        {activeTab === 1 && <>{/* Add Molecules components here */}</>}
        {activeTab === 2 && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Components;
