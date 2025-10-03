"use client";

import { ChevronRight, ChevronsUpDown } from "lucide-react";

import {
 Collapsible,
 CollapsibleContent,
 CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
 SidebarGroup,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 SidebarMenuSub,
 SidebarMenuSubButton,
 SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminNavThree({ items }) {
 return (
  <>
   <SidebarGroup>
    <SidebarMenu>
     {items.map((item) => (
      <Collapsible
       key={item.title}
       asChild
       defaultOpen={false}
       className="group/collapsible"
      >
       <SidebarMenuItem>
        <CollapsibleTrigger asChild>
         <SidebarMenuButton tooltip={item.title}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
         </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
         <SidebarMenuSub>
          {item.items?.map((subItem) => (
           <Collapsible
            key={subItem.title}
            defaultOpen={false}
            className="group/collapsible"
           >
            <NestedItem item={subItem} />
           </Collapsible>
          ))}
         </SidebarMenuSub>
        </CollapsibleContent>
       </SidebarMenuItem>
      </Collapsible>
     ))}
    </SidebarMenu>
   </SidebarGroup>
  </>
 );
}

function NestedItem({ item }) {
 const path = usePathname();
 return (
  <SidebarMenuItem>
   <CollapsibleTrigger asChild>
    <SidebarMenuButton tooltip={item.title}>
     {item.icon && <item.icon />}
     <span>{item.title}</span>
     <ChevronsUpDown className="ml-auto" />
    </SidebarMenuButton>
   </CollapsibleTrigger>
   <CollapsibleContent>
    <SidebarMenuSub>
     {item.items?.map((subItem) => (
      <SidebarMenuSubItem key={subItem.title}>
       <SidebarMenuSubButton asChild isActive={subItem.url === path}>
        <Link href={subItem.url}>
         <span>{subItem.title}</span>
        </Link>
       </SidebarMenuSubButton>
      </SidebarMenuSubItem>
     ))}
    </SidebarMenuSub>
   </CollapsibleContent>
  </SidebarMenuItem>
 );
}
