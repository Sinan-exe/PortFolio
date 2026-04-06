import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileAvatar({ className, src, alt }) {
  return (
    <Avatar className={className}>
      <AvatarImage
        src={src}
        alt={alt}
        className="object-cover w-full h-full object-top"
      />
      <AvatarFallback>IS</AvatarFallback>
    </Avatar>
  );
}
