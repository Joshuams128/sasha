import { projects } from "@/lib/projects";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutStrip } from "@/components/AboutStrip";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <AboutStrip />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
