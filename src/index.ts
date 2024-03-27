// file: src/index.ts

import "dotenv/config";
import express, { Express, Request, Response } from "express";
import path from "path";
import multer, { Multer } from "multer";

import { createIndex, loadIndex } from "./llama";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// set up EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// set up multer for file uploads
const storage = multer.memoryStorage();
const upload: Multer = multer({ storage });

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

// Handle file upload
app.post(
  "/upload",
  upload.single("document"),
  async (req: Request, res: Response) => {
    if (!req.file) return;

    try {
      // Access the file content from `req.file.buffer`
      const content: string = req.file.buffer.toString();
      // create index
      await createIndex(content);

      // Send a response to the client
      res.status(200).json({ message: "Document indexed successfully." });
    } catch (error) {
      res.status(500).json({ message: "Error indexing document." });
    }
  }
);

// query the index
app.post("/query", async (req: Request, res: Response) => {
  const query = req.body.query;
  const index = await loadIndex();

  // query the index
  const queryEngine = index.asQueryEngine();
  const response = await queryEngine.query({ query });

  res.status(200).json({ response: response.toString() });
});

app.listen(port, () => {
  console.log(`🔥🔥🔥: Server is running at http://localhost:${port}`);
});
