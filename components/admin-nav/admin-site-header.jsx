"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "../mode-toggle";
import { SlashIcon } from "lucide-react";
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Title from "../title";

export function AdminSiteHeader() {
 const pathName = usePathname();

 let content;

 if (pathName.startsWith("/admin/enrollment")) {
  content = (
   <Breadcrumb>
    <BreadcrumbList>
     <BreadcrumbItem>
      <BreadcrumbLink asChild>
       <Link href="/admin" className="text-base font-medium">
        Admin
       </Link>
      </BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbSeparator>
      <SlashIcon />
     </BreadcrumbSeparator>
     <BreadcrumbItem>
      <BreadcrumbPage className="text-base font-medium">
       Enrollment
      </BreadcrumbPage>
     </BreadcrumbItem>
    </BreadcrumbList>
   </Breadcrumb>
  );
 } else if (pathName.startsWith("/admin/admission")) {
  content = (
   <Breadcrumb>
    <BreadcrumbList>
     <BreadcrumbItem>
      <BreadcrumbLink asChild>
       <Link href="/admin" className="text-base font-medium">
        Admin
       </Link>
      </BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbSeparator>
      <SlashIcon />
     </BreadcrumbSeparator>
     <BreadcrumbItem>
      <BreadcrumbPage className="text-base font-medium">
       Admission
      </BreadcrumbPage>
     </BreadcrumbItem>
    </BreadcrumbList>
   </Breadcrumb>
  );
 } else if (pathName.startsWith("/admin/registrar-management")) {
  content = (
   <Breadcrumb>
    <BreadcrumbList>
     <BreadcrumbItem>
      <BreadcrumbLink asChild>
       <Link href="/admin" className="text-base font-medium">
        Admin
       </Link>
      </BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbSeparator>
      <SlashIcon />
     </BreadcrumbSeparator>
     <BreadcrumbItem>
      <BreadcrumbPage className="text-base font-medium">
       Registrar Management
      </BreadcrumbPage>
     </BreadcrumbItem>
    </BreadcrumbList>
   </Breadcrumb>
  );
 } else {
  content = <Title className="text-base font-medium">Admin DashBoard</Title>;
 }

 return (
  <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
   <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
    <SidebarTrigger className="-ml-1" />
    <Separator
     orientation="vertical"
     className="mx-2 data-[orientation=vertical]:h-4"
    />
    {content}
    <div className="ml-auto flex items-center gap-2">
     <ModeToggle />
    </div>
   </div>
  </header>
 );
}
