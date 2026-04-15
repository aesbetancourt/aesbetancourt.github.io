import { useTranslation } from "react-i18next"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="pb-8 pt-4 px-6">
      <Separator className="mb-8" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>{t("footer.built_with")}</p>
        <p>
          &copy; {year} Alejandro Sánchez. {t("footer.rights")}.
        </p>
      </div>
    </footer>
  )
}
