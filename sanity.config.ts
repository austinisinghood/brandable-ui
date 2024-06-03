import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import PreviewTab from "./sanity/components/PreviewTab"; // Ensure this path is correct
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Your Project Title",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: "production",
  basePath: "/admin",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Pages")
              .schemaType("page")
              .child(
                S.documentTypeList("page")
                  .title("Pages")
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType("page")
                      .views([
                        S.view.form().id("editor"),
                        S.view
                          .component(PreviewTab)
                          .title("Preview")
                          .id("preview"),
                      ])
                  )
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
