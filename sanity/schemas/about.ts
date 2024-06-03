// schemas/job.ts

const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Just type a headline.",
    },
  ],
};

export default about;
