import { useTranslation } from "react-i18next"
import { certifications } from "@/lib/data"
import { useReveal } from "@/hooks/use-reveal"
import { SectionLabel } from "./section-label"

export function Education() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="education" ref={root}>
      <SectionLabel n="04" label={t("nav.education")} />
      <h2 className="sec reveal">{t("education.heading")}</h2>
      <div className="spectable edutable reveal">
        <article className="trow">
          <span className="ref">A</span>
          <span className="period">{t("education.years")}</span>
          <div>
            <h3 className="role">{t("education.role")}</h3>
            <p className="co">{t("education.school")}</p>
          </div>
          <p className="detail">{t("education.detail")}</p>
        </article>
      </div>

      <h3 className="subsec reveal">{t("education.certifications")}</h3>
      <div className="certgrid reveal-group">
        {certifications.map((group) => (
          <div className="certgroup" key={group.org}>
            <h4>{group.org}</h4>
            <ul>
              {group.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
