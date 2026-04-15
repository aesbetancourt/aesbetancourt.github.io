import { useTranslation } from "react-i18next"
import { SectionWrapper } from "./section-wrapper"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const categoryOrder = [
  "languages",
  "architecture",
  "cloud",
  "databases",
  "backend",
  "devops",
  "frontend",
] as const

export function Skills() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl font-bold mb-12">{t("skills.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categoryOrder.map((category, i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {t(`skills.categories.${category}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills[category].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="hover:bg-muted-foreground/20 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
