import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "./locales/en.json"
import es from "./locales/es.json"
import fr from "./locales/fr.json"
import de from "./locales/de.json"
import it from "./locales/it.json"

// Key the switcher writes when the visitor picks a language by hand.
export const LANG_STORAGE_KEY = "lang"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      it: { translation: it },
    },
    // Normalize region codes (fr-CA -> fr) and send anything unsupported
    // (e.g. pt-BR) to English.
    supportedLngs: ["en", "es", "fr", "de", "it"],
    load: "languageOnly",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // First visit: use the browser language. Returning visitors keep their
      // explicit choice. Nothing is cached automatically, so a detected
      // language never overrides a later change of browser language.
      order: ["localStorage", "navigator"],
      lookupLocalStorage: LANG_STORAGE_KEY,
      caches: [],
    },
  })

// Keep <html lang> in sync for screen readers, hyphenation and translators.
if (typeof document !== "undefined") {
  const syncHtmlLang = (lng: string) => {
    document.documentElement.lang = lng
  }
  syncHtmlLang(i18n.resolvedLanguage ?? "en")
  i18n.on("languageChanged", () => syncHtmlLang(i18n.resolvedLanguage ?? "en"))
}
