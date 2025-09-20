"use client";

import {
 SidebarGroup,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminNavTwo({ items }) {
 const path = usePathname();

 return (
  <SidebarGroup className="group-data-[collapsible=icon]:hidden">
   <SidebarMenu>
    {items.map((item) => (
     <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={item.url === path}>
       <Link href={item.url}>
        <item.icon />
        <span>{item.title}</span>
       </Link>
      </SidebarMenuButton>
     </SidebarMenuItem>
    ))}
   </SidebarMenu>
  </SidebarGroup>
 );
}
