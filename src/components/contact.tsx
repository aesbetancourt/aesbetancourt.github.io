import { useTranslation } from "react-i18next"
import { SectionWrapper } from "./section-wrapper"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"
import { socialLinks } from "@/lib/data"

export function Contact() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
        <p className="text-muted-foreground mb-4">
          {t("contact.description")}
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
          <MapPin className="h-4 w-4" />
          {t("contact.location")}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" asChild>
            <a href={`mailto:${socialLinks.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              {t("contact.email")}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`tel:${socialLinks.phone}`}>
              <Phone className="h-4 w-4 mr-2" />
              {t("contact.phone")}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
