// types/index.ts

import { PortableTextBlock } from "sanity";

export type TeamMemberType = {
  _id: string;
  fullName: string;
  headline: string;
  teamMemberImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export type ProjectType = {
  _id: string;
  _updatedAt: Date;
  externalLink: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  content: PortableTextBlock[];
};
