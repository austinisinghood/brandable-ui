import React from "react";
import { blocks } from "@/app/blocks";

interface ComponentProps {
  [key: string]: any;
}

interface Component {
  _key: string;
  _type: string;
  props: ComponentProps;
}

const BlockMapper: { [type: string]: React.ComponentType<any> } = {
  hero: blocks.HeroBlock,
  header: blocks.HeaderBlock,
  footer: blocks.FooterBlock,
};

export function blockMapper(components: any) {
  const blocks = components?.map((block: Component) => {
    const Block = BlockMapper[block._type];
    return <Block key={block._key} {...block} />;
  });

  return blocks;
}
