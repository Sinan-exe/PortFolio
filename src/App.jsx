import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import SkillSection from "./components/SkillSection";
import WorkExperience from "./components/WorkExperience";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <WorkExperience />
      <Projects />
      <Analytics />
    </>
  );
}

export default App;
