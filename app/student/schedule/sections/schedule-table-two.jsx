import React from "react";

import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";

export default function ScheduleTableTwo({ columnHead, schedule }) {
 return (
  <>
   <div className="overflow-hidden rounded-md border">
    <Table>
     <TableHeader>
      <TableRow>
       {columnHead &&
        columnHead.map((colHead, index) => (
         <TableHead key={index}>{colHead}</TableHead>
        ))}
      </TableRow>
     </TableHeader>
     <TableBody>
      {schedule ? (
       schedule.map((item, index) => (
        <TableRow key={index} className={"h-24"}>
         <TableCell>{item.subjectCode}</TableCell>
         <TableCell>{item.subjectName}</TableCell>
         <TableCell>
          <div className="flex flex-col">
           {item.schedule.map((sched, i) => (
            <span key={i}>{sched}</span>
           ))}
          </div>
         </TableCell>
         <TableCell>{item.sectionAndRoom}</TableCell>
        </TableRow>
       ))
      ) : (
       <TableRow colSpan={columnHeadTwo.length}>
        <TableCell className="text-center">No schedule displayed.</TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
  </>
 );
}
