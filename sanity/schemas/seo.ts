// schemas/seo.js

interface Rule {
  required: () => Rule;
  max: (maxLength: number) => Rule;
  warning: (message: string) => Rule;
}

export default {
  name: "seo",
  title: "SEO",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) =>
        Rule.max(160).warning(
          "Longer descriptions may be truncated by search engines"
        ),
    },
    {
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true, // Enables the image to be cropped around a point of interest
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          options: {
            isHighlighted: true, // Highlights the alt text field in the studio
          },
        },
      ],
    },
    // Additional SEO fields like keywords, robots settings, etc., can be added here
  ],
  preview: {
    select: {
      title: "pageTitle",
      subtitle: "description",
      media: "openGraphImage",
    },
  },
};
