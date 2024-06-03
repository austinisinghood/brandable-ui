// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: "production",
  apiVersion: "2024-04-13",
  useCdn: false,
  token:
    "sk7dhpE8jRcxzWChVscKtm02oQDlyN7AgM0B2Vi1E2zBQLgLXITjzjjZfwd2bA1M7fyypB6eVOOtyoPod5e5wpAlAaAQglyVJ8y1gJ5uRzKkPHRP4C1WFdibYMIxMok98ZjaXsVtP36Oqb6tYejiCx5T7jGfhfKpMooiBc6Luhi1JZZaD0JV", // if needed
};

const client = createClient(config);

export default client;
