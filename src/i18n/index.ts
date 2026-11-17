import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en.json"

// The site is English only. The text stays in en.json, read through i18next.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})
