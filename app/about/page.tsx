import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutHero from "../components/AboutHero"
import MissionSection from "../components/MissionSection"
import TeamSection from "../components/TeamSection"
import TechnologySection from "../components/TechnologySection"
import CtaSection from "../components/CtaSection"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <MissionSection />
        <TeamSection />
        <TechnologySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

