import { useTranslation } from "react-i18next"
import { Topbar } from "@/components/topbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Stack } from "@/components/stack"
import { Contact } from "@/components/contact"
import { TitleBlock } from "@/components/title-block"

function App() {
  const { i18n } = useTranslation()
  return (
    <div className="sheet">
      <Topbar />
      <main>
        {/* Remount on locale change: the hero splits its headline into per-word
            spans, so React must not diff against that rewritten DOM. */}
        <Hero key={i18n.language} />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Stack />
        <Contact />
      </main>
      <TitleBlock />
    </div>
  )
}

export default App
