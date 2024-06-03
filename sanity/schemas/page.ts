import { defineField } from "sanity";
// import { HeroComponent } from "../../app/components/HeroComponent";
import BlockSelector from "../components/BlockSelector";

export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
    },
    {
      name: "seoDescription",
      type: "text",
      title: "SEO Description",
    },
    {
      name: "seoImage",
      type: "image",
      title: "SEO Image",
      options: { hotspot: true },
    },
    {
      name: "components",
      type: "array",
      title: "Pagebuilder",
      description: "Add and configure components for this page",
      inputComponent: BlockSelector,
      of: [{ type: "hero" }, { type: "testimonial" }],
    },
  ],
};
