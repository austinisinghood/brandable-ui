// import "../../app/styles/globals.css";
// import "../../app/styles/fonts.css";

import React, { useEffect, useState } from "react";

import { blockMapper } from "@/app/blocks/utils";

import { debounce } from "lodash";

const PreviewTab = ({ document }: any) => {
  const [previewData, setPreviewData] = useState<any>();
  const blocks = blockMapper(previewData?.components);

  const debouncedSetPreviewData = debounce(setPreviewData, 300);

  useEffect(() => {
    debouncedSetPreviewData(document.draft || document.displayed);
  }, [document.draft, document.displayed]);

  return <div className="h-full">{blocks}</div>;
};

export default PreviewTab;
