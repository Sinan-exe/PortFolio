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
            <span className="font-mono text-xl md:text-2xl tracking-normal font-medium">
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
            <span className="text-sm md:text-base text-foreground font-medium">
              Sinan
            </span>
            , a developer living in Dubai, UAE. I love to code and make{" "}
            <span className="text-sm md:text-base text-foreground font-medium">
              (break){" "}
            </span>
            things.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            I love both{" "}
            <span className="text-sm md:text-base text-foreground font-medium">
              Development
            </span>{" "}
            &{" "}
            <span className="text-sm md:text-base text-foreground font-medium">
              Design
            </span>
            . So yes, I can make things look good and actually work.
            <span className="text-sm md:text-base text-foreground font-medium">
              (Shocking, I know)
            </span>
          </p>
        </div>
        <div className="px-6 md:px-8 flex gap-4 pb-8">
          <Button className="bg-secondary text-secondary-foreground text-[12px] md:text-sm border  border-border rounded-lg hover:bg-secondary hover:ring ring-ring cursor-pointer flex items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <span className="text-secondary-foreground">Get in Touch</span>
            <img src="images/linkedin-svgrepo-com.svg" className="size-6!" />
          </Button>
          <Button className="bg-primary text-primary-foreground text-[12px] md:text-sm border shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-primary rounded-lg hover:bg-primary hover:ring ring-ring cursor-pointer flex items-center">
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
