import { useTranslation } from "react-i18next"
import { Github, Globe } from "lucide-react"
import { projects } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"

export function Projects() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="projects" ref={root}>
      <div className="eyebrow reveal">
        03 / {t("nav.projects")} <span className="ln" />
      </div>
      <h2 className="sec reveal">{t("projects.heading")}</h2>
      <div className="xp reveal-group">
        {projects.map(({ key, name, url, site, stack }) => {
          const bullets = t(`projects.entries.${key}.bullets`, {
            returnObjects: true,
          }) as string[]
          return (
            <div className="item" key={key}>
              <div className="yr">{t(`projects.entries.${key}.kind`)}</div>
              <div>
                <p className="ro">{name}</p>
                <p className="co">{t(`projects.entries.${key}.tagline`)}</p>
                <div className="de">
                  <ul>
                    {bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className="chips projchips">
                  {stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="projlinks">
                  {site && (
                    <a
                      className="projlink"
                      href={site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={14} strokeWidth={1.75} />
                      {t("projects.website")}
                    </a>
                  )}
                  <a
                    className="projlink"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} strokeWidth={1.75} />
                    {t("projects.source")}
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
