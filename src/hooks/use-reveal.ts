import { useEffect, useRef } from "react"
import { animate, createScope, onScroll, stagger, utils } from "animejs"

/**
 * Scroll-triggered reveal for a content section. Returns a ref to attach to the
 * section root; all reveals are scoped to that element. Honors prefers-reduced-
 * motion (skips entirely, leaving content visible) and tears down on unmount.
 *
 * Opt-in via classes inside the section:
 *  - `.reveal`        — single element, fades + rises as it enters the viewport
 *  - `.reveal-group`  — direct children cascade in with a stagger
 *  - `.eyebrow .ln`   — accent line draws in (scaleX)
 */
export function useReveal() {
  const root = useRef<HTMLElement>(null)
  const scope = useRef<ReturnType<typeof createScope> | null>(null)

  useEffect(() => {
    if (!root.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    scope.current = createScope({ root }).add(() => {
      utils.$(".reveal").forEach((el) => {
        animate(el, {
          opacity: [0, 1],
          translateY: [22, 0],
          duration: 700,
          ease: "out(3)",
          autoplay: onScroll({ target: el, enter: "bottom-=60 top" }),
        })
      })

      utils.$(".reveal-group").forEach((group) => {
        animate(Array.from(group.children), {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 640,
          delay: stagger(70),
          ease: "out(3)",
          autoplay: onScroll({ target: group, enter: "bottom-=40 top" }),
        })
      })

      utils.$(".eyebrow .ln").forEach((ln) => {
        animate(ln, {
          scaleX: [0, 1],
          duration: 560,
          ease: "out(4)",
          autoplay: onScroll({ target: ln, enter: "bottom-=20 top" }),
        })
      })
    })

    return () => scope.current?.revert()
  }, [])

  return root
}
