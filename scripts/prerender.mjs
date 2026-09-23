// Put the server-rendered app into dist/index.html so the content is in the
// HTML without JavaScript. Run after the client and SSR builds.
import { readFile, rm, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const dist = new URL("../dist/", import.meta.url)
const ssrDir = new URL("../dist-ssr/", import.meta.url)

const { render } = await import(new URL("entry-server.js", ssrDir).href)
const indexPath = fileURLToPath(new URL("index.html", dist))
const template = await readFile(indexPath, "utf-8")

const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error(`prerender: "${placeholder}" not found in dist/index.html`)
}

const html = await render()
await writeFile(indexPath, template.replace(placeholder, `<div id="root">${html}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log("prerender: wrote dist/index.html")
