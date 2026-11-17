import { useTranslation } from "react-i18next"
import { ArrowUpRight, Github, Linkedin } from "lucide-react"
import { socialLinks } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"
import { SectionLabel } from "./section-label"

export function Contact() {
  const { t } = useTranslation()
  const root = useReveal()
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="contact" ref={root}>
      <SectionLabel n="06" label={t("nav.contact")} />
      <p className="big reveal">
        {t("contact.big")}{" "}
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          {t("contact.sayHello")}
        </a>
      </p>
      <div className="cta reveal-group">
        <a className="btn primary" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={14} strokeWidth={2} />
          {t("contact.links.linkedin")}
          <ArrowUpRight size={14} strokeWidth={2} />
        </a>
        <a className="btn" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <Github size={14} strokeWidth={2} />
          {t("contact.links.github")}
          <ArrowUpRight size={14} strokeWidth={2} />
        </a>
      </div>
      <p className="colophon reveal">
        © {year} {t("contact.colophon")}
      </p>
    </section>
  )
}
