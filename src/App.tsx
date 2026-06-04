import { useTranslation } from "react-i18next"
import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Stack } from "@/components/stack"
import { Contact } from "@/components/contact"

function App() {
  const { i18n } = useTranslation()
  return (
    <div className="wrap">
      <Sidebar />
      <main className="content">
        {/* Remount on locale change: the hero splits its headline into per-word
            spans, so React must not diff against that rewritten DOM. */}
        <Hero key={i18n.language} />
        <About />
        <Experience />
        <Education />
        <Stack />
        <Contact />
      </main>
    </div>
  )
}

export default App
