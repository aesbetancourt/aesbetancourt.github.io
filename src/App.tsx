import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Stack } from "@/components/stack"
import { Contact } from "@/components/contact"

function App() {
  return (
    <div className="wrap">
      <Sidebar />
      <main className="content">
        <Hero />
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
