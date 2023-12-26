import { renderToPipeableStream } from "react-dom/server";

import express from "express";
const app = express();
const port = 3000;

import { App } from "./App";
import { Root } from "./Root";
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  const { pipe } = renderToPipeableStream(
    <Root>
      <App />
    </Root>,
    {
      bootstrapScripts: ["public/client.js"],
      onShellReady() {
        res.setHeader("content-type", "text/html");
        pipe(res);
      },
    },
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
