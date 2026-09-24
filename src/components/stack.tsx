import { useTranslation } from "react-i18next"
import { exploringLanguages, skills } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"

const categoryOrder = [
  "architecture",
  "cloud",
  "databases",
  "backend",
  "aiTools",
  "languages",
  "devops",
  "frontend",
] as const

export function Stack() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="stack" ref={root}>
      <div className="eyebrow reveal">
        04 / {t("nav.stack")} <span className="ln" />
      </div>
      <h2 className="sec reveal">{t("stack.heading")}</h2>
      <div className="stackgrid reveal-group">
        {categoryOrder.map((category) => (
          <div key={category}>
            <h4>{t(`stack.categories.${category}`)}</h4>
            <div className="chips">
              {skills[category].map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
              {category === "languages" &&
                exploringLanguages.map((lang) => (
                  <span className="chip exploring" key={lang}>
                    {lang}
                  </span>
                ))}
            </div>
            {category === "languages" && (
              <p className="exploring-note">{t("stack.exploring")}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
