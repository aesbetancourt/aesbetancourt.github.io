import { useTranslation } from "react-i18next"

/** Drawing title block at the foot of the sheet. */
export function TitleBlock() {
  const { t } = useTranslation()
  const now = new Date()
  const rev = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}`

  return (
    <footer className="titleblock">
      <div>
        <small>{t("titleblock.project")}</small>
        aesbetancourt.dev
      </div>
      <div>
        <small>{t("titleblock.drawnBy")}</small>
        A. SÁNCHEZ
      </div>
      <div>
        <small>{t("titleblock.rev")}</small>
        {rev}
      </div>
      <div>
        <small>{t("titleblock.sheet")}</small>
        06 / 06
      </div>
    </footer>
  )
}
