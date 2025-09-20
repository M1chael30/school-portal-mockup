import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavHeader() {
 return (
  <SidebarMenu>
   <SidebarMenuItem>
    <SidebarMenuButton size="xl" asChild>
     <div className="">
      <Avatar className='size-12'>
       <AvatarImage src="/photo/school_logo_placeholder.png" />
       <AvatarFallback>SNHS</AvatarFallback>
      </Avatar>
      <div className="flex leading-none">
       <span className="font-medium text-lg">SNHS</span>
      </div>
     </div>
    </SidebarMenuButton>
   </SidebarMenuItem>
  </SidebarMenu>
 );
}
