// schemas/teamMember.ts

import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const teamMember = {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(50),
    }),
    {
      name: "teamMemberImage",
      title: "Team Member Image",
      type: "image",
      description: "Upload a teamMember picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
          initialValue: "https://instagram.com/",
        },
        {
          name: "threads",
          title: "Threads URL",
          type: "url",
          initialValue: "https://threads.net/",
        },
        {
          name: "youtube",
          title: "YouTube URL",
          type: "url",
          initialValue: "https://youtube.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
          initialValue: "https://twitter.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
  ],
};

export default teamMember;
