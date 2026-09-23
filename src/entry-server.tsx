import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import i18n from "i18next"
import "./i18n"
import App from "./App"

// Build-time render for crawlers and link previews. Static HTML is always
// English; the client re-renders in the visitor's language on load.
export async function render(): Promise<string> {
  await i18n.changeLanguage("en")
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
