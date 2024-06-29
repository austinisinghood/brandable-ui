import Head from "next/head";

import BrandDisplay from "./BrandDisplay";

import { getPageData } from "@/sanity/sanity.query";

export default async function PageSlugRoute({ params }: any) {
  const pageData = await getPageData("/");

  return (
    <>
      <Head>
        <title>{pageData.seoTitle || pageData.title}</title>
        <meta name="description" content={pageData.seoDescription} />
        <meta property="og:image" content={pageData.seoImage?.asset.url} />
      </Head>
      <main className="bg-zinc-100">
        <div className="w-full max-w-screen-2xl mx-auto py-48 px-6">
          <h1 className="w-full max-w-screen-2xl roar text-ink mx-auto">
            Brand
          </h1>
          <BrandDisplay />
        </div>
      </main>
    </>
  );
}
