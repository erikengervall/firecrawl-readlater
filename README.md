# firecrawl-readlater

A tiny CLI that saves any web page as clean markdown for reading later, powered by [Firecrawl](https://firecrawl.dev) and the `@mendable/firecrawl-js` SDK.

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

`src/readlater.js` calls Firecrawl's `scrape` with `formats: ["markdown"]` and `onlyMainContent: true`, then prepends the page title and source URL.

## Develop

```bash
npm install
npm test
```
