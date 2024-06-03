// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

// Fetch all slugs for pages
export async function fetchSlugs() {
  return client.fetch(
    groq`*[_type == "page" && defined(slug.current)]{
      "slug": slug.current
    }`
  );
}

// Fetch data for any page by its slug
export async function getPageData(slug: string) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      title,
      seo,
      components[]{
        ...,
        _type == 'reference' => {
          // Dereference any specific component types
          ...@->{
            _type,
            image {
              asset->{
                _id,
                url
              },
              alt
            }
          }
        }
      }
    }`,
    { slug }
  );
}
