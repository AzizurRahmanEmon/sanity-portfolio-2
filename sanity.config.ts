// sanity.config.ts

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "test",
  projectId: "v43a1ehn",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
