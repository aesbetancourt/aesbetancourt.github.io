import { useTranslation } from "react-i18next"
import { SectionWrapper } from "./section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Building2, Calendar } from "lucide-react"

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
    <SectionWrapper id="experience">
      <h2 className="text-3xl font-bold mb-12">{t("experience.title")}</h2>
      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {experienceKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-20"
            >
              <div className="absolute left-0 md:left-8 top-6 w-2 h-2 rounded-full bg-foreground -translate-x-[3.5px]" />

              <Card className="bg-card border-border hover:border-muted-foreground/30 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-lg">
                      {t(`experience.entries.${key}.role`)}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {t(`experience.entries.${key}.period`)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    {t(`experience.entries.${key}.company`)}
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {(
                      t(`experience.entries.${key}.bullets`, {
                        returnObjects: true,
                      }) as string[]
                    ).map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-foreground/40 mt-1.5 shrink-0">
                          &bull;
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
