// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "v43a1ehn",
  dataset: "production",
  apiVersion: "2023-12-03",
  useCdn: false,
};

const client = createClient(config);

export default client;
