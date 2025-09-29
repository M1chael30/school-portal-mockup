import React from "react";

import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";

export default function ScheduleTableOne({ columnHead, schedule }) {
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
       schedule.map((sched, index) => (
        <TableRow key={index} className={"h-24"}>
         <TableCell>{sched.time}</TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.monday.subject}</span>
           <span>{sched.monday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.tuesday.subject}</span>
           <span>{sched.tuesday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.wednesday.subject}</span>
           <span>{sched.wednesday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.thursday.subject}</span>
           <span>{sched.thursday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.friday.subject}</span>
           <span>{sched.friday.room}</span>
          </div>
         </TableCell>
        </TableRow>
       ))
      ) : (
       <TableRow colSpan={columnHead.length}>
        <TableCell className="text-center">No schedule displayed.</TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
  </>
 );
}
