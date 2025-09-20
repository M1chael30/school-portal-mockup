import React from "react";

import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Title from "@/components/title";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function StudentGradesTable({
 studentData,
 filters,
 columnHead,
}) {
 return (
  <>
   <section className="overflow-hidden rounded-md border">
    {filters.gradeAndSection && filters.subject ? (
     <Table>
      <TableHeader>
       <TableRow>
        {columnHead.length &&
         columnHead.map((column) => (
          <TableHead
           key={column}
           className={cn(
            column.includes("Action") && "text-center",
            column.includes("Student LRN") && "font-bold tracking-wider"
           )}
          >
           {column}
          </TableHead>
         ))}
       </TableRow>
      </TableHeader>
      <TableBody>
       {filters.searchTerm && studentData.length ? (
        studentData.map((student, index) => (
         <TableRow key={index}>
          <TableCell className={"font-bold tracking-wider"}>
           {student.student_lrn}
          </TableCell>
          <TableCell>{student.student_name}</TableCell>
          <TableCell className="flex justify-center">
           <Button variant={"outline"} size={"sm"} asChild>
            <Link href={`/teacher/student-grades/${student.student_lrn}`}>
             View
            </Link>
           </Button>
          </TableCell>
         </TableRow>
        ))
       ) : (
        <TableRow>
         <TableCell colSpan={columnHead.length} className={"text-center h-24"}>
          No data.
         </TableCell>
        </TableRow>
       )}
      </TableBody>
     </Table>
    ) : (
     <div className="h-30 flex items-center justify-center">
      <Title className={"text-md"}>
       Filter first and search name to show data.
      </Title>
     </div>
    )}
   </section>
  </>
 );
}
