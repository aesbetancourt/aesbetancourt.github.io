import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTranslation } from "react-i18next"

type Theme = "light" | "dark"

const META_COLOR: Record<Theme, string> = { light: "#f5f3ee", dark: "#0d0e11" }

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(theme)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", META_COLOR[theme])
}

function currentTheme(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark"
}

export function ThemeToggle() {
  const { t } = useTranslation()
  // The pre-paint script in index.html already set the class; mirror it.
  const [theme, setTheme] = useState<Theme>(currentTheme)

  // Follow the OS only while the visitor hasn't made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return
      const sys: Theme = e.matches ? "dark" : "light"
      applyTheme(sys)
      setTheme(sys)
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const next: Theme = theme === "dark" ? "light" : "dark"
  const label = t(`theme.${next}`)

  return (
    <button
      type="button"
      className="langbtn themebtn"
      onClick={() => {
        applyTheme(next)
        localStorage.setItem("theme", next)
        setTheme(next)
      }}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <Sun size={14} strokeWidth={1.75} />
      ) : (
        <Moon size={14} strokeWidth={1.75} />
      )}
    </button>
  )
}
