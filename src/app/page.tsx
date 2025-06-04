import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import AboutMe from "@/components/AboutMe"
import HeroAboutMe from "@/components/HeroAboutMe"

export default function Home() {
  return (
    <main>
      <HeroAboutMe />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}
