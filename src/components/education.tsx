import { useTranslation } from "react-i18next"
import { useReveal } from "@/hooks/use-reveal"

export function Education() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="education" ref={root}>
      <div className="eyebrow reveal">
        03 / {t("nav.education")} <span className="ln" />
      </div>
      <h2 className="sec reveal">{t("education.heading")}</h2>
      <div className="xp reveal">
        <div className="item">
          <div className="yr">{t("education.years")}</div>
          <div>
            <p className="ro">{t("education.role")}</p>
            <p className="co">{t("education.school")}</p>
            <p className="de">{t("education.detail")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
