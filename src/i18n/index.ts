import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "./locales/en.json"
import es from "./locales/es.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    // Only en/es are translated; normalize region codes (es-ES -> es) and send
    // anything unsupported (e.g. fr-FR) to English.
    supportedLngs: ["en", "es"],
    load: "languageOnly",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // First visit: use the browser language. Returning visitors keep their
      // explicit choice (persisted in localStorage by the switcher).
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })
