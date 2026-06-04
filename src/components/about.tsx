import { Trans, useTranslation } from "react-i18next"
import { useReveal } from "@/hooks/use-reveal"

export function About() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="about" ref={root}>
      <div className="eyebrow reveal">
        01 / {t("nav.about")} <span className="ln" />
      </div>
      <div className="aboutgrid reveal">
        <div>
          <p>
            <Trans i18nKey="about.p1" components={{ strong: <strong /> }} />
          </p>
          <p>
            <Trans i18nKey="about.p2" components={{ strong: <strong /> }} />
          </p>
          <p>
            <Trans i18nKey="about.p3" components={{ strong: <strong /> }} />
          </p>
        </div>
        <div className="avatarwrap">
          <div className="avatar" aria-hidden="true">
            AS
          </div>
        </div>
      </div>
    </section>
  )
}
