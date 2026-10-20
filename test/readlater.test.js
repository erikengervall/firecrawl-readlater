import { test } from "node:test";
import assert from "node:assert/strict";
import { toMarkdown } from "../src/readlater.js";

function fakeClient(doc) {
  const calls = [];
  return { calls, scrape: async (url, options) => (calls.push({ url, options }), doc) };
}

test("toMarkdown renders the page title, source and markdown", async () => {
  const client = fakeClient({ markdown: "Hello world", metadata: { title: "Example" } });
  const md = await toMarkdown("https://example.com", client);
  assert.equal(md, "# Example\n\n> Saved from https://example.com\n\nHello world\n");
});

test("toMarkdown asks Firecrawl for main-content markdown", async () => {
  const client = fakeClient({ markdown: "" });
  await toMarkdown("https://example.com", client);
  assert.equal(client.calls[0].url, "https://example.com");
  assert.deepEqual(client.calls[0].options.formats, ["markdown"]);
  assert.equal(client.calls[0].options.onlyMainContent, true);
  assert.equal(client.calls[0].options.integration, "_readlater");
});
