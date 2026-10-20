# firecrawl-readlater

Save any web page as markdown for reading later, powered by **FireCrawl** from Mendable ([github.com/mendableai/firecrawl](https://github.com/mendableai/firecrawl)).

> Demo repository for a Wildfire walkthrough. It is a real, working tool, kept deliberately small.

## Install

```bash
npm install -g github:erikengervall/firecrawl-readlater
npm install @mendable/firecrawl-js@0.0.36
```

## Use

```bash
export FIRECRAWL_API_KEY=fc-...
readlater https://firecrawl.dev/blog -o firecrawl-blog.md
```

Without `-o` the markdown goes to stdout.

## How it works

readlater sends the URL to FireCrawl's `/v0/scrape` endpoint with `pageOptions.onlyMainContent`, then prepends the page title and source URL. LLM Extract (beta) support is coming soon.

## Develop

```bash
npm install
npm test
```
