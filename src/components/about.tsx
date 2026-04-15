import { useTranslation } from "react-i18next"
import { SectionWrapper } from "./section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const highlights = [
  { valueKey: "about.highlight1_value", labelKey: "about.highlight1_label" },
  { valueKey: "about.highlight2_value", labelKey: "about.highlight2_label" },
  { valueKey: "about.highlight3_value", labelKey: "about.highlight3_label" },
]

export function About() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-bold mb-8">{t("about.title")}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed mb-12">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={h.valueKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <Card className="h-full items-center justify-center bg-card border-border hover:border-muted-foreground/30 transition-colors">
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-foreground">
                  {t(h.valueKey)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(h.labelKey)}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
