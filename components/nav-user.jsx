"use client";

import { ChevronsUpDown, LogOut, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function NavUser({ user }) {
 const { isMobile } = useSidebar();
 const router = useRouter();

 return (
  <SidebarMenu>
   <SidebarMenuItem>
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <SidebarMenuButton
       size="lg"
       className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
       <Avatar className="size-8 rounded-lg">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="rounded-lg">
         {user.name[0].toUpperCase()}
        </AvatarFallback>
       </Avatar>
       <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user.name}</span>
       </div>
       <ChevronsUpDown className="ml-auto size-4" />
      </SidebarMenuButton>
     </DropdownMenuTrigger>
     <DropdownMenuContent
      className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align="end"
      sideOffset={4}
     >
      <DropdownMenuLabel>
       <span className="truncate font-medium">Menu</span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
       <Button
        onClick={() => router.push("/login")}
        className="w-full justify-start h-5"
        variant="ghost"
       >
        <LogOut />
        Log out
       </Button>
      </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
   </SidebarMenuItem>
  </SidebarMenu>
 );
}
