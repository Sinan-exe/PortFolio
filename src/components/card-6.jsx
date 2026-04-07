import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

export const Card_6 = () => {
  return (
    <Card className="relative rounded-none shadow-none p-4">
      <Icons />
      <div className="flex flex-col gap-2">
        <div>
          <img src="/musclenation.jpeg" className="rounded-t-lg" />
        </div>
        <div>content</div>
      </div>
    </Card>
  );
};
