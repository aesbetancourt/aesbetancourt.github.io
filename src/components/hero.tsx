import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/data"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        <p className="text-muted-foreground text-lg mb-4">
          {t("hero.greeting")}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          {t("hero.name")}
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-6">
          {t("hero.role")}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          {t("hero.tagline")}
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`mailto:${socialLinks.email}`} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
