import { useTranslation } from "react-i18next"

const experienceKeys = [
  "entropy",
  "vintra",
  "bita_lead",
  "bita_dev",
  "intelix",
  "freelance",
] as const

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience">
      <div className="eyebrow">
        02 / {t("nav.experience")} <span className="ln" />
      </div>
      <h2 className="sec">{t("experience.heading")}</h2>
      <div className="xp">
        {experienceKeys.map((key) => {
          const bullets = t(`experience.entries.${key}.bullets`, {
            returnObjects: true,
          }) as string[]
          return (
            <div className="item" key={key}>
              <div className="yr">{t(`experience.entries.${key}.years`)}</div>
              <div>
                <p className="ro">{t(`experience.entries.${key}.role`)}</p>
                <p className="co">{t(`experience.entries.${key}.company`)}</p>
                <div className="de">
                  <ul>
                    {bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
