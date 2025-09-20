import { StudentAppSidebar } from "@/components/student-nav/student-app-sidebar";
import { StudentSiteHeader } from "@/components/student-nav/student-site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function StudentLayout({ children }) {
 return (
  <SidebarProvider>
   <StudentAppSidebar />
   <SidebarInset>
    <StudentSiteHeader />
    <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
   </SidebarInset>
  </SidebarProvider>
 );
}
