import { Trans, useTranslation } from "react-i18next"
import { useReveal } from "@/hooks/use-reveal"
import avatar from "@/assets/avatar.webp"
import { SectionLabel } from "./section-label"

export function About() {
  const { t } = useTranslation()
  const root = useReveal()

  return (
    <section id="about" ref={root}>
      <SectionLabel n="01" label={t("nav.about")} />
      <div className="aboutgrid reveal">
        <div className="prose">
          <p>
            <Trans i18nKey="about.p1" components={{ strong: <strong /> }} />
          </p>
          <p>
            <Trans i18nKey="about.founding" components={{ strong: <strong /> }} />
          </p>
          <p>
            <Trans i18nKey="about.p2" components={{ strong: <strong /> }} />
          </p>
          <p>
            <Trans i18nKey="about.p3" components={{ strong: <strong /> }} />
          </p>
        </div>
        <figure className="plate">
          <span className="cm tl" aria-hidden="true" />
          <span className="cm tr" aria-hidden="true" />
          <span className="cm bl" aria-hidden="true" />
          <span className="cm br" aria-hidden="true" />
          <img
            src={avatar}
            alt="Alejandro Sánchez"
            width={240}
            height={288}
            loading="lazy"
            decoding="async"
          />
          <figcaption>01 — A. Sánchez · BCN</figcaption>
        </figure>
      </div>
    </section>
  )
}
