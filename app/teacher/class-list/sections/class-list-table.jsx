import React from "react";

import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import Title from "@/components/title";
import { cn } from "@/lib/utils";

export default function ClassListTable({ studentData, filters, columnHead }) {
 return (
  <>
   <section className="overflow-hidden rounded-md border print:overflow-hidden print:rounded-md print:border">
    {filters.subject ? (
     <Table>
      <TableHeader>
       <TableRow>
        {columnHead &&
         columnHead.map((column) => (
          <TableHead
           key={column}
           className={cn(
            column.includes("Student LRN") &&
             "font-bold tracking-wider print:font-bold print:tracking-wider"
           )}
          >
           {column}
          </TableHead>
         ))}
       </TableRow>
      </TableHeader>
      <TableBody>
       {studentData ? (
        studentData.map((student, index) => (
         <TableRow key={index}>
          <TableCell
           className={
            "font-bold tracking-wider rint:font-bold print:tracking-wider"
           }
          >
           {student.student_lrn}
          </TableCell>
          <TableCell>{student.student_name}</TableCell>
          <TableCell>{student.grade_level.split(" ")[1]}</TableCell>
          <TableCell>{student.section.split(" ")[3]}</TableCell>
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
      <Title className="text-md">Provide Subject to show data.</Title>
     </div>
    )}
   </section>
  </>
 );
}
