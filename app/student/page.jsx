import Title from "@/components/title";
import { studentNavmenu } from "@/lib/data";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import React from "react";

const { name, studentId } = studentNavmenu.user;

export default function StudentIndex() {
 return (
  <section className="space-y-5">
   <Title className="text-2xl">Welcome {name} to your student page!</Title>

   <div className="overflow-hidden rounded-md border w-full max-w-[1100px] mx-auto">
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Student's Mobile Number</TableHead>
       <TableHead>Parent's Mobile Number</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      <TableRow>
       <TableCell>09123456789</TableCell>
       <TableCell>09123456789</TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </div>

   <p className="text-muted-foreground text-center">
    For any problem in the system, contact System Administrator for details.
    Click the links under MENU to select operation. It is recommended to logout
    by clicking the logout button everytime you leave your PC. If you do not
    agree with the conditions or you are not {studentId} please logout.
   </p>
  </section>
 );
}
