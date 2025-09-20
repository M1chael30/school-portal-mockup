import { TeacherAppSidebar } from "@/components/teacher-nav/teacher-app-sidebar";
import { TeacherSiteHeader } from "@/components/teacher-nav/teacher-site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function TeacherLayout({ children }) {
 return (
  <SidebarProvider>
   <TeacherAppSidebar />
   <SidebarInset>
    <TeacherSiteHeader />
    <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
   </SidebarInset>
  </SidebarProvider>
 );
}
