import { Trans, useTranslation } from "react-i18next"
import { githubHandle } from "@/lib/data"

export function Hero() {
  const { t } = useTranslation()

  const meta = [
    { label: t("hero.meta.role"), value: t("sidebar.role") },
    { label: t("hero.meta.focus"), value: t("hero.focusValue") },
    { label: t("hero.meta.based"), value: t("sidebar.location") },
    { label: t("hero.meta.github"), value: githubHandle },
  ]

  return (
    <section className="hero" id="top">
      <p className="lead">
        <Trans
          i18nKey="hero.lead"
          components={{ ts: <em />, py: <em />, ai: <em /> }}
        />
      </p>
      <p className="sub">{t("hero.sub")}</p>
      <div className="meta">
        {meta.map((m) => (
          <span key={m.label}>
            {m.label}&nbsp; <b>{m.value}</b>
          </span>
        ))}
      </div>
    </section>
  )
}
