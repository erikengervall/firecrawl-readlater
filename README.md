# firecrawl-readlater

Save any web page as clean markdown for reading later, powered by **Firecrawl** ([firecrawl.dev](https://firecrawl.dev)).

> Demo repository for a Wildfire walkthrough. It is a real, working tool, kept deliberately small.

## Install

```bash
npm install -g github:erikengervall/firecrawl-readlater
```

## Use

```bash
export FIRECRAWL_API_KEY=fc-...
readlater https://firecrawl.dev/blog -o firecrawl-blog.md
```

Without `-o` the markdown goes to stdout.

## How it works

readlater calls `scrape` from the Firecrawl JS SDK with `formats: ["markdown"]` and `onlyMainContent: true`, tagged with the integration `_readlater`, then prepends the page title and source URL.

## Develop

```bash
npm install
npm test
```
