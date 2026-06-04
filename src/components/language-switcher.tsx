import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="langswitch">
      {languages.map((lang) => {
        const active = i18n.language?.startsWith(lang.code)
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={cn("langbtn", active && "active")}
            aria-pressed={active}
          >
            {lang.label}
          </button>
        )
      })}
    </div>
  )
}
