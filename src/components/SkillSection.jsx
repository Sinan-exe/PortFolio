import skills from "@/constants/data";
import { Button } from "./ui/button";

function SkillSection() {
  return (
    <div className="relative max-w-2xl mx-auto bg-background text-foreground ">
      <div className="absolute top-0 left-2 h-full border-l border-dashed border-border" />
      <div className="absolute top-0 right-2 h-full border-r border-dashed border-border" />
      <div className="px-4 md:px-6">
        <h1 className="font-mono text-xl md:text-2xl tracking-wide pt-4">
          Skills
        </h1>
        <p className="mt-4 text-[12px] md:text-sm text-muted-foreground mb-6">
          These are the technologies I've learned and worked with. This list is
          constantly evolving as I continue to learn and grow as a developer.
        </p>
        <div className="space-y-4">
          {skills.map((ele) => (
            <div key={ele.title} className="mb-6">
              <h3 className="text-base font-medium font-mono tracking-wide text-primary mb-4">
                {ele.title}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {ele.item.map((skill) => (
                  <Button
                    className={`bg-secondary text-secondary-foreground text-[12px] md:text-sm border  border-border rounded-lg hover:bg-secondary hover:ring ring-ring cursor-pointer flex items-center`}
                    key={skill.name}
                  >
                    <img src={skill.img} className="size-5!" alt={skill.alt} />
                    <span className="text-shadow-sm">{skill.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;

// <div className="space-y-4">
//   <div>
//     <h3 className="text-sm font-medium font-mono tracking-wide text-primary mb-4">{`<LANGUAGES/>`}</h3>
//     <div className="flex flex-wrap gap-3">
//       <Button className={`flex items-center rounded-lg`}>
//         <img
//           src="public/javascript-logo-svgrepo-com.svg"
//           className="size-4"
//         />
//         <span>JavaScript</span>
//       </Button>
//     </div>
//   </div>
//   <div>
//     <h3 className="text-sm font-medium font-mono tracking-wide text-primary">{`<FRAMEWORK/LIBRARIES/>`}</h3>
//     <div></div>
//   </div>
//   <div>
//     <h3 className="text-sm font-medium font-mono tracking-wide text-primary">{`<BACKEND / RUNTIME />`}</h3>
//     <div></div>
//   </div>
//   <div>
//     <h3 className="text-sm font-medium font-mono tracking-wide text-primary">{`<DATABASE/>`}</h3>
//     <div></div>
//   </div>
//   <div>
//     <h3 className="text-sm font-medium font-mono tracking-wide text-primary">{`<DEVELOPER TOOLS/>`}</h3>
//     <div></div>
//   </div>
