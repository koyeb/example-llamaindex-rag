// file: src/llama.ts

import "dotenv/config";

import {
  TogetherLLM,
  TogetherEmbedding,
  serviceContextFromDefaults,
  Document,
  VectorStoreIndex,
  storageContextFromDefaults,
} from "llamaindex";

const togetherLLM = new TogetherLLM({ apiKey: process.env.API_KEY });
const togetherEmbedding = new TogetherEmbedding({
  apiKey: process.env.API_KEY,
});

const serviceContext = serviceContextFromDefaults({
  llm: togetherLLM,
  embedModel: togetherEmbedding,
});

const createIndex = async (text: string) => {
  // load document
  const document = new Document({ text });

  // create storage context
  const storageContext = await storageContextFromDefaults({
    persistDir: "./storage",
  });

  // create index
  const index = await VectorStoreIndex.fromDocuments([document], {
    serviceContext,
    storageContext,
  });

  return index;
};

const loadIndex = async () => {
  const storageContext = await storageContextFromDefaults({
    persistDir: "./storage",
  });

  const index = await VectorStoreIndex.init({ storageContext, serviceContext });

  return index;
};

export { createIndex, loadIndex };
