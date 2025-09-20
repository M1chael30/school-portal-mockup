"use client";

import { NavUser } from "@/components/nav-user";
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarRail,
} from "@/components/ui/sidebar";
import { adminNavmenu } from "@/lib/data";
import { AdminNavOne } from "./admin-nav-one";
import { AdminNavTwo } from "./admin-nav-two";
import NavHeader from "../nav-header";

export function AdminAppSidebar({ ...props }) {
 return (
  <Sidebar collapsible="offcanvas" {...props}>
   <SidebarHeader>
    <NavHeader />
   </SidebarHeader>
   <SidebarContent>
    <AdminNavOne items={adminNavmenu.navItem1} />
    <AdminNavTwo items={adminNavmenu.navItem2} />
   </SidebarContent>
   <SidebarFooter>
    <NavUser user={adminNavmenu.user} />
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 );
}
