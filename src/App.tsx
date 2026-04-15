import { lazy, Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const ParticleBackground = lazy(() =>
  import("@/components/particle-background").then((m) => ({
    default: m.ParticleBackground,
  })),
)

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
