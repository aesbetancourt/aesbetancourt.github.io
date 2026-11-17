import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import "./i18n"
import App from "./App"

// Build-time render for crawlers and link previews.
export async function render(): Promise<string> {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
