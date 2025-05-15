import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsShowcaseSection } from "@/components/sections/ProjectsShowcaseSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AiCoverLetterGeneratorSection } from "@/components/sections/AiCoverLetterGeneratorSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsShowcaseSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
