import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LoginLogo() {
 return (
  <div className="flex items-center gap-2 md:justify-start">
   <Avatar className="size-16">
    <AvatarImage src="/photo/school_logo.png" />
    <AvatarFallback>SNHS</AvatarFallback>
   </Avatar>
   <div className="flex leading-none">
    <span className="font-medium text-2xl">SNHS</span>
   </div>
  </div>
 );
}
