import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"

const sections = [
  "about",
  "experience",
  "projects",
  "education",
  "stack",
  "contact",
] as const

export function Topbar() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="strip">
      <a href="#top" className="brand">
        A. Sánchez <span>— {t("sidebar.role")}</span>
      </a>
      <nav className="snav">
        {sections.map((id, i) => (
          <a key={id} href={`#${id}`} className={cn(active === id && "active")}>
            <b>{String(i + 1).padStart(2, "0")}</b>
            {t(`nav.${id}`)}
          </a>
        ))}
      </nav>
      <div className="ctl">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  )
}
