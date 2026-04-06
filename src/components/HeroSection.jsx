import { ProfileAvatar } from "./ProfileAvatar";
import { Button } from "./ui/button";
import { IconDownload } from "@tabler/icons-react";

function HeroSection() {
  return (
    <>
      <div className="relative max-w-2xl mx-auto bg-background text-foreground ">
        <div className="absolute top-0 left-2 h-full border-l border-dashed border-border" />
        <div className="absolute top-0 right-2 h-full border-r border-dashed border-border" />
        <div className="px-4 md:px-6 pt-10 flex gap-4 md:gap-6 items-center mb-4">
          <div>
            <ProfileAvatar
              className="h-24 w-24 rounded-full"
              src="/Avatar.jpeg"
              alt="IS"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xl md:text-2xl tracking-normal">
              Ismail Sinan.
            </span>
            <a
              href="https://github.com/Sinan-exe"
              className="text-primary hover:text-muted-foreground text-sm md:text-base"
            >
              @sinan-exe
            </a>
          </div>
        </div>
        <div className="px-6 md:px-8 mb-8">
          <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">
            {" "}
            I'm{" "}
            <span className="text-sm md:text-base text-foreground">Sinan</span>,
            a developer living in Dubai, UAE. I love to code and make{" "}
            <span className="text-sm md:text-base text-foreground">
              (break){" "}
            </span>
            things.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            I love both{" "}
            <span className="text-sm md:text-base text-foreground">
              Development
            </span>{" "}
            &{" "}
            <span className="text-sm md:text-base text-foreground">Design</span>
            . So yes, I can make things look good and actually work.
            <span className="text-sm md:text-base text-foreground">
              (Shocking, I know)
            </span>
          </p>
        </div>
        <div className="px-6 md:px-8 flex gap-4 pb-8">
          <Button className="bg-secondary text-secondary-foreground text-[12px] md:text-sm border shadow-sm border-border rounded-lg hover:bg-secondary hover:ring ring-ring cursor-pointer flex items-center">
            <img src="public/linkedin-svgrepo-com.svg" className="size-6!" />
            <span className="text-secondary-foreground">
              Available for new Oppurtunity
            </span>
          </Button>
          <Button className="bg-primary text-primary-foreground text-[12px] md:text-sm border shadow-sm border-border rounded-lg hover:bg-secondary hover:ring ring-ring cursor-pointer flex items-center">
            <span>
              <IconDownload />
            </span>
            <p>Download CV</p>
          </Button>
        </div>
      </div>
      <div className="w-full border-b border-dashed border-border" />
    </>
  );
}

export default HeroSection;
