import { Card_6 } from "./card-6";

function Projects() {
  return (
    <div className="relative max-w-2xl mx-auto bg-background text-foreground ">
      <div className="absolute top-0 left-2 h-full border-l border-dashed border-border" />
      <div className="absolute top-0 right-2 h-full border-r border-dashed border-border" />
      <div className="px-4 md:px-6">
        <h1 className="font-mono text-xl md:text-2xl tracking-wide pt-4 font-medium">
          Projects
          <span className="text-[12px] pl-2 text-muted-foreground font-sans">
            things i have built.
          </span>
        </h1>
        <div className="mt-4 mb-10 grid sm:grid-cols-2 gap-4">
          <Card_6 />
          <Card_6 />
        </div>
      </div>
    </div>
  );
}

export default Projects;
