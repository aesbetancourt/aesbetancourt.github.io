import { useTranslation } from "react-i18next"

export function Education() {
  const { t } = useTranslation()

  return (
    <section id="education">
      <div className="eyebrow">
        03 / {t("nav.education")} <span className="ln" />
      </div>
      <h2 className="sec">{t("education.heading")}</h2>
      <div className="xp">
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
