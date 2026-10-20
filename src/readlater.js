import Firecrawl from "@mendable/firecrawl-js";

export function createClient(apiKey = process.env.FIRECRAWL_API_KEY) {
  if (!apiKey) throw new Error("Set FIRECRAWL_API_KEY (get one at https://firecrawl.dev).");
  return new Firecrawl({ apiKey });
}

export async function toMarkdown(url, client = createClient()) {
  const doc = await client.scrape(url, {
    formats: ["markdown"],
    onlyMainContent: true,
  });
  const title = doc.metadata?.title ?? url;
  return `# ${title}\n\n> Saved from ${url}\n\n${doc.markdown ?? ""}\n`;
}
