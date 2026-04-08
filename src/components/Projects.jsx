import { Card_6 } from "./card-6";

function Projects() {
  return (
    <section>
      <div className="relative max-w-2xl mx-auto bg-background text-foreground  pb-6">
        <div className="absolute top-0 left-2 h-full border-l border-dashed border-border" />
        <div className="absolute top-0 right-2 h-full border-r border-dashed border-border" />
        <div className="px-4 md:px-6">
          <h1 className="font-mono text-xl md:text-2xl tracking-wide pt-4 font-medium">
            Projects
            <span className="text-[12px] pl-2 text-muted-foreground font-sans">
              things i have built.
            </span>
          </h1>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <Card_6
              src="/aiResume-img.jpeg"
              title="Resumind"
              livelink="#"
              gitlink="#"
              content="A modern AI-powered web application that helps job seekers analyze their resumes and improve their chances of landing interviews."
              techs={[
                "React",
                "TailwindCSS",
                "JavaScript",
                "Figma",
                "PuterJS",
                "React Router",
                "LLM",
              ]}
            />
            <Card_6
              src="/fastReactPizza-img.jpeg"
              title="Fast-React-Pizza"
              livelink="#"
              gitlink="#"
              content="A fully functional pizza ordering app where users can browse a menu, manage their cart, place orders with priority delivery, and track by order ID."
              techs={[
                "React",
                "TailwindCSS",
                "JavaScript",
                "React Router",
                "Redux",
              ]}
            />
            <Card_6
              src="/virtualR-img.jpeg"
              title="virtualR"
              livelink="#"
              gitlink="#"
              content="A responsive landing page for a fictional VR development tool featuring pricing tiers, testimonials, and workflow sections."
              techs={["React", "TailwindCSS", "JavaScript", "Figma"]}
            />
            <Card_6
              src="/muscleNation-img.jpeg"
              title="Muscle Nation"
              livelink="#"
              gitlink="#"
              content="A responsive gym landing page with pricing plans, program showcase, BMI calculator, and smooth scroll navigation.."
              techs={["HTML", "CSS", "JavaScript", "Figma"]}
            />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-dashed border-border" />
    </section>
  );
}

export default Projects;
