import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { LANG_STORAGE_KEY } from "@/i18n"

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "it", label: "IT", name: "Italiano" },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="langswitch" role="group" aria-label="Language">
      {languages.map((lang) => {
        const active = i18n.resolvedLanguage === lang.code
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => {
              localStorage.setItem(LANG_STORAGE_KEY, lang.code)
              i18n.changeLanguage(lang.code)
            }}
            className={cn("langbtn", active && "active")}
            aria-pressed={active}
            aria-label={lang.name}
            title={lang.name}
            lang={lang.code}
          >
            {lang.label}
          </button>
        )
      })}
    </div>
  )
}
