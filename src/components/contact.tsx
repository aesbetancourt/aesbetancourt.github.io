import { useTranslation } from "react-i18next"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { socialLinks } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"
import cvPdf from "@/assets/AlejandroSanchezCV.pdf"

export function Contact() {
  const { t } = useTranslation()
  const root = useReveal()
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="contact" ref={root}>
      <div className="eyebrow reveal">
        05 / {t("nav.contact")} <span className="ln" />
      </div>
      <p className="big reveal">
        {t("contact.big")}{" "}
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          {t("contact.sayHello")}
        </a>
      </p>
      <div className="clinks reveal-group">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <Github size={15} strokeWidth={1.75} />
          {t("contact.links.github")}
        </a>
        <a href={`mailto:${socialLinks.email}`}>
          <Mail size={15} strokeWidth={1.75} />
          {t("contact.links.email")}
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={15} strokeWidth={1.75} />
          {t("contact.links.linkedin")}
        </a>
        <a href={cvPdf} download="AlejandroSanchez_CV.pdf">
          <Download size={15} strokeWidth={1.75} />
          {t("contact.links.resume")}
        </a>
      </div>
      <p className="colophon reveal">
        © {year} {t("contact.colophon")}
      </p>
    </section>
  )
}
