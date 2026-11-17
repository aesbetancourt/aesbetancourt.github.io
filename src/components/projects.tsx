import { useTranslation } from "react-i18next"
import { ArrowUpRight, Github, Globe } from "lucide-react"
import { projects } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"
import { SectionLabel } from "./section-label"

export function Projects() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="projects" ref={root}>
      <SectionLabel n="03" label={t("nav.projects")} />
      <h2 className="sec reveal">{t("projects.heading")}</h2>
      <div className="pgrid reveal-group">
        {projects.map(({ key, name, url, site, stack }, i) => {
          const bullets = t(`projects.entries.${key}.bullets`, {
            returnObjects: true,
          }) as string[]
          return (
            <article className="detail" key={key}>
              <header>
                <span>
                  <b>{String.fromCharCode(65 + i)}</b> — {name}
                </span>
                <span>{t(`projects.entries.${key}.kind`)}</span>
              </header>
              <div className="dbody">
                <h3 className="pname">{name}</h3>
                <p className="co">{t(`projects.entries.${key}.tagline`)}</p>
                <ul className="scope">
                  {bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
                <div className="tags">
                  {stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="plinks">
                  {site && (
                    <a className="btn" href={site} target="_blank" rel="noopener noreferrer">
                      <Globe size={14} strokeWidth={2} />
                      {t("projects.website")}
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </a>
                  )}
                  <a className="btn" href={url} target="_blank" rel="noopener noreferrer">
                    <Github size={14} strokeWidth={2} />
                    {t("projects.source")}
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
