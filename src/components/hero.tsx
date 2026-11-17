import { useEffect, useRef } from "react"
import { Trans, useTranslation } from "react-i18next"
import { animate, createScope, splitText, stagger, utils } from "animejs"
import { ArrowUpRight, Linkedin } from "lucide-react"
import { githubHandle, socialLinks } from "@/lib/data"
import { SystemDiagram } from "./system-diagram"

export function Hero() {
  const { t } = useTranslation()
  const root = useRef<HTMLElement>(null)
  const scope = useRef<ReturnType<typeof createScope> | null>(null)

  // Signature moment: the dimension line draws, the name and headline rise
  // word by word once fonts are ready, then the spec rows and the drawing
  // follow. Keyed by language in App so a locale switch remounts cleanly
  // (splitText rewrites the DOM, so React must not reconcile against it).
  useEffect(() => {
    if (!root.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let reverted = false
    document.fonts.ready.then(() => {
      if (reverted || !root.current) return
      scope.current = createScope({ root }).add(() => {
        const { words } = splitText(".lead", { words: true })
        utils.set(".lead", { opacity: 1 })

        animate(".dim", {
          opacity: [0, 1],
          scaleX: [0, 1],
          duration: 700,
          ease: "out(4)",
        })
        animate(".name", {
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 760,
          delay: 120,
          ease: "out(3)",
        })
        animate(words, {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 680,
          delay: stagger(30, { start: 300 }),
          ease: "out(3)",
        })
        animate([".sub", ".spec", ".cta"], {
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 640,
          delay: stagger(90, { start: 520 }),
          ease: "out(3)",
        })
        animate(".drawing", {
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 900,
          delay: 380,
          ease: "out(3)",
        })
      })
    })

    return () => {
      reverted = true
      scope.current?.revert()
    }
  }, [])

  const spec = [
    { label: t("hero.meta.now"), value: t("sidebar.founding") },
    { label: t("hero.meta.focus"), value: t("hero.focusValue") },
    { label: t("hero.meta.based"), value: t("sidebar.location") },
  ]

  return (
    <section className="hero" id="top" ref={root}>
      <div>
        <div className="dim reveal" aria-hidden="true">
          <i />
          <span>{t("sidebar.role")}</span>
          <i />
        </div>
        <h1 className="name reveal">
          Alejandro
          <br />
          <b>Sánchez</b>
        </h1>
        <p className="lead reveal">
          <Trans i18nKey="hero.lead" components={{ ts: <em />, py: <em />, ai: <em /> }} />
        </p>
        <p className="sub reveal">{t("hero.sub")}</p>
        <dl className="spec reveal">
          {spec.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
          <div>
            <dt>{t("hero.meta.github")}</dt>
            <dd>
              <a className="ul" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                {githubHandle}
              </a>
            </dd>
          </div>
        </dl>
        <div className="cta reveal">
          <a className="btn primary" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={14} strokeWidth={2} />
            {t("sidebar.resume")}
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>

      <figure className="drawing reveal">
        <figcaption className="fig">{t("diagram.figure")}</figcaption>
        <SystemDiagram />
      </figure>
    </section>
  )
}
