import { useTranslation } from "react-i18next"
import { keyFigures } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"
import { SectionLabel } from "./section-label"

const experienceKeys = [
  "entropy",
  "vintra",
  "bita_lead",
  "bita_dev",
  "intelix",
] as const

export function Experience() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="experience" ref={root}>
      <SectionLabel n="02" label={t("nav.experience")} />
      <h2 className="sec reveal">{t("experience.heading")}</h2>
      <div className="spectable xptable">
        <div className="thead reveal" aria-hidden="true">
          <span>{t("columns.ref")}</span>
          <span>{t("columns.period")}</span>
          <span>{t("columns.role")}</span>
          <span>{t("columns.scope")}</span>
          <span>{t("columns.figures")}</span>
        </div>
        <div className="reveal-group">
          {experienceKeys.map((key, i) => {
            const bullets = t(`experience.entries.${key}.bullets`, {
              returnObjects: true,
            }) as string[]
            return (
              <article className="trow" key={key}>
                <span className="ref">{String.fromCharCode(65 + i)}</span>
                <span className="period">{t(`experience.entries.${key}.years`)}</span>
                <div>
                  <h3 className="role">{t(`experience.entries.${key}.role`)}</h3>
                  <p className="co">{t(`experience.entries.${key}.company`)}</p>
                </div>
                <ul className="scope">
                  {bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
                <dl className="figs">
                  {keyFigures[key]?.map((f) => (
                    <div key={f.label}>
                      <dt>{t(`figures.${f.label}`)}</dt>
                      <dd>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
