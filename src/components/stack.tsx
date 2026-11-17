import { useTranslation } from "react-i18next"
import { exploringLanguages, skills } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"
import { SectionLabel } from "./section-label"

const categoryOrder = [
  "architecture",
  "ai",
  "cloud",
  "databases",
  "backend",
  "security",
  "aiTools",
  "languages",
  "devops",
  "frontend",
] as const

/** The stack as a bill of materials. */
export function Stack() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="stack" ref={root}>
      <SectionLabel n="05" label={t("nav.stack")} />
      <h2 className="sec reveal">{t("stack.heading")}</h2>
      <div className="spectable bom">
        <div className="thead reveal" aria-hidden="true">
          <span>{t("columns.item")}</span>
          <span>{t("columns.group")}</span>
          <span>{t("columns.components")}</span>
        </div>
        <div className="reveal-group">
          {categoryOrder.map((category, i) => (
            <div className="trow" key={category}>
              <span className="period">05.{String(i + 1).padStart(2, "0")}</span>
              <h3 className="grp">{t(`stack.categories.${category}`)}</h3>
              <div className="tags">
                {skills[category].map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
                {category === "languages" &&
                  exploringLanguages.map((lang) => (
                    <span className="tag exploring" key={lang}>
                      {lang}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="note reveal">{t("stack.exploring")}</p>
    </section>
  )
}
