"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import Name from "./Name";
import Info from "./Info";
import Character from "./Character";
import Tools from "./Tools";

const People = [
  {
    title: "Master of Ideas",
    job: "Creative Director",
    video: "/characters/creative-director-final.mp4",
    image: "/characters/creative-director-1.png",
  },
  {
    title: "Code Whisperer",
    job: "Frontend Engineer",
    video: "/video.mp4",
    image: "/characters/frontend-engineer-1.png",
  },
  {
    title: "Experience Guru",
    job: "UX/UI Designer",
    video: "/video.mp4",
    image: "/characters/product-designer-1.png",
  },
  {
    title: "Visual Wizard",
    job: "Graphic Designer",
    video: "/video.mp4",
    image: "/characters/graphic-designer-1.png",
  },
  {
    title: "Cinema Connoisseur",
    job: "Filmmaker",
    video: "/video.mp4",
    image: "/characters/filmmaker-1.png",
  },
];

export const Roles = () => {
  const [person, setPerson] = useState(0);
  const { title, job, video, image } = People[person];

  const prevPerson = () => {
    if (person === 0) {
      setPerson(People.length - 1);
    } else {
      setPerson(person - 1);
    }
  };

  const nextPerson = () => {
    if (person === People.length - 1) {
      setPerson(0);
    } else {
      setPerson(person + 1);
    }
  };

  return (
    <section
      className={twMerge(
        `relative w-full flex flex-col flex-wrap lg:h-screen lg:min-h-[900px] lg:flex-row`
      )}
    >
      <div className="w-full flex flex-col flex-wrap pt-24 sm:pt-36 lg:absolute lg:bottom-0 lg:h-[85%] lg:flex-row lg:pt-0 xl:h-[87.5%]">
        <Name title={title} job={job} />
        <Info />
        <Character
          prevPerson={prevPerson}
          nextPerson={nextPerson}
          image={image}
          video={video}
        />
        <Tools />
      </div>
    </section>
  );
};
