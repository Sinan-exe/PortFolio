import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Badge } from "./ui/badge";

const Placeholder = {
  title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
  content: <div className="bg-secondary h-20 w-full rounded-md" />,
};
const Icon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      strokeWidth="1"
      stroke="currentColor"
      className={cn("text-foreground size-6 absolute", className)}
    >
      <title>Icon</title>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Icons = () => (
  <>
    <Icon className="-top-3 -left-3" />
    <Icon className="-top-3 -right-3" />
    <Icon className="-bottom-3 -left-3" />
    <Icon className="-bottom-3 -right-3" />
  </>
);

export const ProjectCard = ({
  src,
  title,
  livelink,
  gitlink,
  content,
  techs,
}) => {
  return (
    <Card className="relative rounded-none shadow-none p-4">
      <Icons />
      <div className="flex flex-col gap-4 sm:gap-2">
        <div>
          <img src={src} className="rounded-t-lg mb-2" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-mono tracking-tighter font-medium">
              {title}
            </h2>
            <div className="flex gap-2 ">
              <a href={livelink} target="_blank" rel="noopener noreferrer">
                <IconExternalLink className="text-muted-foreground" />
              </a>
              <a href={gitlink} target="_blank" rel="noopener noreferrer">
                <IconBrandGithub className="text-muted-foreground" />
              </a>
            </div>
          </div>
          <p className="text-[12px] sm:text-xs px-1 text-muted-foreground">
            {content}
          </p>
          {/* Tech Stack Badges */}
          {techs.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-[11px] rounded-md bg-muted text-muted-foreground font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
