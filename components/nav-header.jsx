import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavHeader() {
 return (
  <SidebarMenu>
   <SidebarMenuItem>
    <SidebarMenuButton size="twoXl" asChild>
     <section>
      <Avatar className="size-16">
       <AvatarImage src="/photo/school_logo.png" />
       <AvatarFallback>SNHS</AvatarFallback>
      </Avatar>
      <div className="flex leading-none">
       <span className="font-medium text-2xl">SNHS</span>
      </div>
     </section>
    </SidebarMenuButton>
   </SidebarMenuItem>
  </SidebarMenu>
 );
}
