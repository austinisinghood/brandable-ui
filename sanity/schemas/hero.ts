// schemas/hero.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  type: "document",
  title: "Hero",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      initialValue: "Hero",
      hidden: true,
    },
    {
      name: "alignment",
      type: "string",
      title: "Alignment",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
    },
    {
      name: "backgroundColor",
      type: "string",
      title: "Background Color",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Accent", value: "accent" },
          { title: "Ink", value: "ink" },
          { title: "Paper", value: "paper" },
        ],
      },
    },
    {
      name: "textColor",
      type: "string",
      title: "Text Color",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Accent", value: "accent" },
          { title: "Ink", value: "ink" },
          { title: "Paper", value: "paper" },
        ],
      },
    },
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "buttonColor",
      type: "string",
      title: "Button Color",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Accent", value: "accent" },
          { title: "Ink", value: "ink" },
          { title: "Paper", value: "paper" },
        ],
      },
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "buttonLink",
      type: "string",
      title: "Button Link",
    },
    {
      name: "linkColor",
      type: "string",
      title: "Link Color",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Accent", value: "accent" },
          { title: "Ink", value: "ink" },
          { title: "Paper", value: "paper" },
        ],
      },
    },
    {
      name: "linkText",
      type: "string",
      title: "Link Text",
    },
    {
      name: "linkUrl",
      type: "string",
      title: "Link URL",
    },
  ],
});
