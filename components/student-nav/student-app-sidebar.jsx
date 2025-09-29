"use client";

import { NavUser } from "@/components/nav-user";
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarRail,
} from "@/components/ui/sidebar";
import { studentNavmenu } from "@/lib/data";
import { StudentNavOne } from "./student-nav-one";
import StudentNavTwo from "./student-nav-two";
import NavHeader from "../nav-header";

export function StudentAppSidebar({ ...props }) {
 return (
  <Sidebar collapsible="offcanvas" {...props}>
   <SidebarHeader>
    <NavHeader />
   </SidebarHeader>
   <SidebarContent>
    <StudentNavTwo items={studentNavmenu.navItem2} />
    <StudentNavOne items={studentNavmenu.navItem1} />
   </SidebarContent>
   <SidebarFooter>
    <NavUser user={studentNavmenu.user} />
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 );
}
