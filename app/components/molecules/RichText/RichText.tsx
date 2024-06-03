import Link from "next/link";
import Image from "next/image";
import sanityClient from "@/sanity/sanity.client";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity";
import urlBuilder from "@sanity/image-url";

const builder = urlBuilder(sanityClient);

function urlForImage(source: any) {
  return builder.image(source);
}

export function RichText({ content }: { content: PortableTextBlock[] }) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }: any) => <h1 className="roar pb-4">{children}</h1>,
      h2: ({ children }: any) => <h2 className="hollar pb-4">{children}</h2>,
      h3: ({ children }: any) => <h3 className="scream pb-4">{children}</h3>,
      h4: ({ children }: any) => <h4 className="shout pb-4">{children}</h4>,
      h5: ({ children }: any) => <h5 className="yell-alt pb-4">{children}</h5>,
      h6: ({ children }: any) => <h6 className="whisper pb-2">{children}</h6>,
      blockquote: ({ children }: any) => (
        <blockquote className="scream my-6 p-6 border-l-4 border-primary">
          {children}
        </blockquote>
      ),
      normal: ({ children }: any) => (
        <p className="talk mb-2 pb-4">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="talk mt-2 ml-6 mb-6">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="talk mt-2 ml-6 mb-6">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="talk mt-2 ml-6 mb-6" style={{ listStyleType: "disc" }}>
          {children}
        </li>
      ),
      number: ({ children }: any) => (
        <li
          className="talk mt-2 ml-6 mb-6"
          style={{ listStyleType: "decimal" }}
        >
          {children}
        </li>
      ),
    },
    marks: {
      link: ({ children, content }: any) => (
        <Link
          className="text-primary font-bold transition-all duration-300 ease-in-out hover:text-primary-dark hover:underline"
          href={content.href}
          target="_blank"
          rel="no-referrer"
        >
          {children}
        </Link>
      ),
    },
    types: {
      image: ({ content }: any) => {
        const imageUrl = urlForImage(content).url();

        if (content) {
          console.log(content);
          return (
            <div className="w-full h-full flex justify-center pb-6">
              <Image src={imageUrl} width={1500} height={1500} alt="Test" />
            </div>
          );
        }
      },
      // add video type
      file: ({ content }: any) => {
        if (content) {
          return (
            <video
              className="w-full h-full"
              controls
              src={urlForImage(content).url()}
            />
          );
        }
      },
    },
  };

  return <PortableText components={components} value={content} />;
}
