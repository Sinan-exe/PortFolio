import { Button } from "./ui/button";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGmail,
} from "@tabler/icons-react";

const links = [
  {
    name: "GitHub",
    logo: <IconBrandGithub />,
  },
  {
    name: "LinkedIn",
    logo: <IconBrandLinkedin />,
  },
  {
    name: "Twitter",
    logo: <IconBrandX />,
  },
  {
    name: "Email",
    logo: <IconBrandGmail />,
  },
];

function Footer() {
  return (
    <div className="relative max-w-2xl mx-auto bg-background text-foreground  pb-6">
      <div className="absolute top-0 left-2 h-full border-l border-dashed border-border" />
      <div className="absolute top-0 right-2 h-full border-r border-dashed border-border" />
      <div className="px-4 md:px-6">
        <h3 className="pt-4 text-sm text-secondary-foreground ">
          Where to find me <span className="font-medium">( digitally )</span> if
          you wish to
        </h3>
        <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
          {links.map((link) => (
            <Button
              className={`bg-secondary text-secondary-foreground  border  border-border rounded-lg hover:bg-secondary hover:ring ring-ring cursor-pointer flex items-center `}
              key={link.name}
            >
              <span className=" align-middle">{link.logo}</span>
              <span className="tracking-wide text-[12px] md:text-sm">
                {link.name}
              </span>
            </Button>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          That's all | Designed and Built with Love.
        </p>
        <p className="text-center text-xs text-muted-foreground">
          @ 2026 Ismail Sinan.
        </p>
      </div>
    </div>
  );
}

export default Footer;
