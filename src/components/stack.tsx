import { useTranslation } from "react-i18next"
import { skills } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"

const categoryOrder = [
  "languages",
  "architecture",
  "cloud",
  "databases",
  "backend",
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
