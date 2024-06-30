import Head from "next/head";

import ComponentInDevelopment from "./ComponentInDevelopment";

import { blockMapper } from "@/app/blocks/utils/";

import { getPageData } from "@/sanity/sanity.query";

export default async function PageSlugRoute({ params }: any) {
  const pageData = await getPageData("/");
  const blocks = blockMapper(pageData.components);

  return (
    <>
      <Head>
        <title>{pageData.seoTitle || pageData.title}</title>
        <meta name="description" content={pageData.seoDescription} />
        <meta property="og:image" content={pageData.seoImage?.asset.url} />
      </Head>
      <main className="bg-zinc-100">
        {blocks}
        <div className="w-full max-w-screen-2xl mx-auto py-48 px-6">
          <ComponentInDevelopment />
        </div>
      </main>
    </>
  );
}
