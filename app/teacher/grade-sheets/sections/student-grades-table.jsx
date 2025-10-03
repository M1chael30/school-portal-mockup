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
import { Input } from "@/components/ui/input";
import { SelectInput } from "@/components/select-input";
import SubTitle from "@/components/sub-title";

export default function StudentGradesTable({
 studentData,
 filters,
 columnHead,
 remarks,
}) {
 return (
  <>
   <section className="overflow-hidden rounded-md border">
    {filters.quarter && filters.subject ? (
     <Table>
      <TableHeader>
       <TableRow>
        {columnHead &&
         columnHead.map((column) => (
          <TableHead
           key={column}
           className={cn(
            column.includes("Student LRN") && "font-bold tracking-wider"
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
          <TableCell className={"font-bold tracking-wider"}>
           {student.student_lrn}
          </TableCell>
          <TableCell>{student.student_name}</TableCell>
          <TableCell>{student.grade_level.split(" ")[1]}</TableCell>
          <TableCell>{student.section.split(" ")[3]}</TableCell>
          <TableCell>
           <Input defaultValue={student.grade} placeholder="Grade" />
          </TableCell>
          <TableCell>
           <SelectInput
            selectValue="Select a Remarks"
            selectLabel="Remarks"
            data={remarks}
           />
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
      <Title className="text-md">
       Provide subject and quarter to show data.
      </Title>
     </div>
    )}
   </section>
   {filters.quarter && filters.subject && (
    <div className="space-y-1">
     <Title className="text-start text-lg tracking-wider">Note:</Title>
     <SubTitle className="text-base">
      The deadline for submission of grades is 11/01/2025.
     </SubTitle>
    </div>
   )}
  </>
 );
}
