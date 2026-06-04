import { useEffect, useRef } from "react"
import { Trans, useTranslation } from "react-i18next"
import { animate, createScope, splitText, stagger, utils } from "animejs"
import { githubHandle } from "@/lib/data"

export function Hero() {
  const { t } = useTranslation()
  const root = useRef<HTMLElement>(null)
  const scope = useRef<ReturnType<typeof createScope> | null>(null)

  // Signature moment: the headline rises word by word once fonts are ready, the
  // accent words pop, then the sub-line and meta row follow. Keyed by language
  // in App so a locale switch remounts cleanly (splitText rewrites the DOM, so
  // React must not reconcile against the split markup).
  useEffect(() => {
    if (!root.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let reverted = false
    document.fonts.ready.then(() => {
      if (reverted || !root.current) return
      scope.current = createScope({ root }).add(() => {
        const { words } = splitText(".lead", { words: true })
        utils.set([".lead", ".meta"], { opacity: 1 })

        animate(words, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 720,
          delay: stagger(34, { start: 80 }),
          ease: "out(3)",
        })
        animate(".lead em", {
          scale: [0.86, 1],
          duration: 760,
          delay: stagger(55, { start: 240 }),
          ease: "out(4)",
        })
        animate(".sub", {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 680,
          delay: 460,
          ease: "out(3)",
        })
        animate(".meta span", {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 600,
          delay: stagger(55, { start: 580 }),
          ease: "out(3)",
        })
      })
    })

    return () => {
      reverted = true
      scope.current?.revert()
    }
  }, [])

  const meta = [
    { label: t("hero.meta.role"), value: t("sidebar.role") },
    { label: t("hero.meta.focus"), value: t("hero.focusValue") },
    { label: t("hero.meta.based"), value: t("sidebar.location") },
    { label: t("hero.meta.github"), value: githubHandle },
  ]

  return (
    <section className="hero" id="top" ref={root}>
      <p className="lead reveal">
        <Trans
          i18nKey="hero.lead"
          components={{ ts: <em />, py: <em />, ai: <em /> }}
        />
      </p>
      <p className="sub reveal">{t("hero.sub")}</p>
      <div className="meta reveal">
        {meta.map((m) => (
          <span key={m.label}>
            {m.label}&nbsp; <b>{m.value}</b>
          </span>
        ))}
      </div>
    </section>
  )
}
