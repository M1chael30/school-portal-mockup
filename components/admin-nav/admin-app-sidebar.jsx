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
import { AdminNavThree } from "./admin-nav-three";
import { usePathname } from "next/navigation";
import Title from "../title";

export function AdminAppSidebar({ ...props }) {
 const pathName = usePathname();

 let content;

 if (pathName.startsWith("/admin/enrollment")) {
  content = <AdminNavOne items={adminNavmenu.navItem3} />;
 } else if (pathName.startsWith("/admin/registrar-management")) {
  content = <AdminNavOne items={adminNavmenu.navItem2} />;
 } else if (pathName.startsWith("/admin/admission")) {
  content = (
   <>
    <AdminNavTwo items={adminNavmenu.navItem4} />
    <AdminNavOne items={adminNavmenu.navItem5} />
   </>
  );
 } else {
  content = <AdminNavTwo items={adminNavmenu.navItem1} />;
 }

 return (
  <Sidebar collapsible="offcanvas" {...props}>
   <SidebarHeader>
    <NavHeader />
   </SidebarHeader>
   <SidebarContent>{content}</SidebarContent>
   <SidebarFooter>
    <NavUser user={adminNavmenu.user} />
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 );
}
