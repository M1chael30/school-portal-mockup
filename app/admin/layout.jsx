import { AdminAppSidebar } from "@/components/admin-nav/admin-app-sidebar";
import { AdminSiteHeader } from "@/components/admin-nav/admin-site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({ children }) {
 return (
  <SidebarProvider>
   <AdminAppSidebar />
   <SidebarInset>
    <AdminSiteHeader />
    <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
   </SidebarInset>
  </SidebarProvider>
 );
}
