import skills from "@/constants/data";
import { Button } from "./ui/button";

function SkillSection() {
  return (
    <>
      <div className="relative max-w-2xl mx-auto bg-background text-foreground ">
        <div className="absolute top-0 left-2 h-full border-l border-dashed border-border" />
        <div className="absolute top-0 right-2 h-full border-r border-dashed border-border" />
        <div className="px-4 md:px-6">
          <h1 className="font-mono text-xl md:text-2xl tracking-wide pt-4 font-medium">
            Skills
            <span className="text-[12px] pl-2 text-muted-foreground font-sans">
              which i use/know.
            </span>
          </h1>
          <p className="mt-4 text-[12px] md:text-sm text-muted-foreground mb-6">
            These are the technologies I've learned and worked with. This list
            is constantly evolving as I continue to learn and grow as a
            developer.
          </p>
          <div className="space-y-2">
            {skills.map((ele) => (
              <div key={ele.title} className="pb-4">
                <h3 className="text-sm sm:text-base tracking-wide text-muted-foreground mb-4">
                  {ele.title}{" "}
                </h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {ele.item.map((skill) => (
                    <Button
                      className={`bg-secondary text-secondary-foreground  border  border-border rounded-lg hover:bg-secondary hover:ring ring-ring cursor-pointer flex items-center `}
                      key={skill.name}
                    >
                      <img
                        src={skill.img}
                        className="size-5!"
                        alt={skill.alt}
                      />
                      <span className="tracking-wide text-[12px] md:text-sm">
                        {skill.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border-b border-dashed border-border" />
    </>
  );
}

export default SkillSection;
