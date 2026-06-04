import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { animate, createScope, stagger } from "animejs"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "./language-switcher"
import { socialLinks } from "@/lib/data"
import cvPdf from "@/assets/AlejandroSanchezCV.pdf"

const sections = [
  { id: "about", nav: "about" },
  { id: "experience", nav: "experience" },
  { id: "education", nav: "education" },
  { id: "stack", nav: "stack" },
  { id: "contact", nav: "contact" },
] as const

export function Sidebar() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string>("about")
  const root = useRef<HTMLElement>(null)
  const scope = useRef<ReturnType<typeof createScope> | null>(null)

  // Entrance cascade on load — the sidebar is always in view, so it runs once
  // on mount rather than on scroll.
  useEffect(() => {
    if (!root.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    scope.current = createScope({ root }).add(() => {
      animate(".reveal", {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 640,
        delay: stagger(70, { start: 120 }),
        ease: "out(3)",
      })
    })
    return () => scope.current?.revert()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="side" ref={root}>
      <span className="brandmark reveal">{t("brand")}</span>
      <h1 className="reveal">
        Alejandro
        <br />
        Sánchez
      </h1>
      <p className="role reveal">{t("sidebar.role")}</p>
      <span className="loc reveal">{t("sidebar.location")}</span>

      <nav className="snav">
        {sections.map(({ id, nav }, i) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn("reveal", active === id && "active")}
          >
            <span className="ix">{String(i + 1).padStart(2, "0")}</span>
            {t(`nav.${nav}`)}
          </a>
        ))}
      </nav>

      <div className="foot reveal">
        <a className="resume" href={cvPdf} download="AlejandroSanchez_CV.pdf">
          <Download size={15} strokeWidth={2} /> {t("sidebar.resume")}
        </a>
        <div className="socials">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Github size={14} strokeWidth={1.75} />
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={14} strokeWidth={1.75} />
            LinkedIn
          </a>
          <a href={`mailto:${socialLinks.email}`}>
            <Mail size={14} strokeWidth={1.75} />
            Email
          </a>
          <span className="sdivider" aria-hidden="true" />
          <LanguageSwitcher />
        </div>
      </div>
    </aside>
  )
}
