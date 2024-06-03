// every other page
import Head from "next/head";

import { blockMapper } from "@/app/blocks/utils/";

import { getPageData } from "@/sanity/sanity.query";

export default async function PageSlugRoute({ params }: any) {
  const pageData = await getPageData(params.slug);
  const blocks = blockMapper(pageData.components);

  return (
    <>
      <Head>
        <title>{pageData.seoTitle || pageData.title}</title>
        <meta name="description" content={pageData.seoDescription} />
        <meta property="og:image" content={pageData.seoImage?.asset.url} />
      </Head>
      <main>{blocks}</main>
    </>
  );
}
