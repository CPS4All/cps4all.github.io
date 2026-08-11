import { writeFile } from "node:fs/promises";
import path from "node:path";
import worker from "../dist/server/index.js";

const outputDirectory = path.resolve("dist/client");
const response = await worker.fetch(
  new Request("https://cps4all.github.io/"),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {},
);

if (!response.ok) {
  throw new Error(`Static export failed with status ${response.status}`);
}

const html = await response.text();

await Promise.all([
  writeFile(path.join(outputDirectory, "index.html"), html),
  writeFile(path.join(outputDirectory, "404.html"), html),
  writeFile(path.join(outputDirectory, ".nojekyll"), ""),
]);

console.log("GitHub Pages export created in dist/client");
