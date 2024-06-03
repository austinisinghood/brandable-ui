import Head from "next/head";

import BrandDisplay from "@/app/documentation/Brand/BrandDisplay";
import ComponentList from "@/app/documentation/UI/ComponentList";

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
      <main>
        {blocks}
        <div className="py-48">
          <BrandDisplay />
          <ComponentList />
        </div>
      </main>
    </>
  );
}
