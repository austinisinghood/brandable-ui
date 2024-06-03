// schemas/testimonial.js

export default {
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "buttonUrl",
      type: "url",
      title: "Button URL",
    },
  ],
};
