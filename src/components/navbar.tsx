import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = ["about", "experience", "skills", "contact"] as const

export function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-semibold tracking-tight text-foreground hover:text-muted-foreground transition-colors"
        >
          AS
        </button>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
