"use client";

import { NavUser } from "@/components/nav-user";
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarRail,
} from "@/components/ui/sidebar";
import { teacherNavmenu } from "@/lib/data";
import { TeacherNavOne } from "./teacher-nav-one";
import NavHeader from "../nav-header";
import { TeacherNavTwo } from "./teacher-nav-two";

export function TeacherAppSidebar({ ...props }) {
 return (
  <Sidebar collapsible="offcanvas" {...props}>
   <SidebarHeader>
    <NavHeader />
   </SidebarHeader>
   <SidebarContent>
    <TeacherNavOne items={teacherNavmenu.navItem1} />
    <TeacherNavOne items={teacherNavmenu.navItem4} />
    <TeacherNavTwo items={teacherNavmenu.navItem2} />
    <TeacherNavTwo items={teacherNavmenu.navItem3} />
   </SidebarContent>
   <SidebarFooter>
    <NavUser user={teacherNavmenu.user} />
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 );
}
