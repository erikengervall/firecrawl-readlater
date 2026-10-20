#!/usr/bin/env node
import { writeFile } from "node:fs/promises";
import { toMarkdown } from "../src/readlater.js";

const [url, flag, out] = process.argv.slice(2);
if (!url || url === "-h" || url === "--help") {
  console.log("Usage: readlater <url> [-o file.md]");
  process.exit(url ? 0 : 1);
}

try {
  const markdown = await toMarkdown(url);
  if (flag === "-o" && out) {
    await writeFile(out, markdown);
    console.log(`Saved ${url} to ${out}`);
  } else {
    process.stdout.write(markdown);
  }
} catch (error) {
  console.error(`readlater: ${error.message}`);
  process.exit(1);
}
