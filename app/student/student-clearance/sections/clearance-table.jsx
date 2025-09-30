import React from "react";

import { Badge } from "@/components/ui/badge";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { CircleAlert, CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Title from "@/components/title";

export default function ClearanceTable({ columnHead, data }) {
 const showOnlyPending = data.filter((item) => item.status === "pending");

 return (
  <>
   {showOnlyPending.length ? (
    <div className="overflow-hidden rounded-md border">
     <Table>
      <TableHeader>
       <TableRow>
        {columnHead.length &&
         columnHead.map((colHead, index) => (
          <TableHead key={index}>{colHead}</TableHead>
         ))}
       </TableRow>
      </TableHeader>
      <TableBody>
       {showOnlyPending.map((item, index) => (
        <TableRow key={index}>
         <TableCell>{item.gradeLevel}</TableCell>
         <TableCell>{item.subjectCode}</TableCell>
         <TableCell>{item.subject}</TableCell>
         <TableCell>{item.teacher}</TableCell>
         <TableCell>
          {
           <Badge
            variant={"secondary"}
            className={cn(
             "text-white",
             item.status === "completed" && "bg-blue-500  dark:bg-blue-600",
             item.status === "pending" && "bg-amber-500 dark:bg-amber-600"
            )}
           >
            {item.status === "completed" ? <CircleCheck /> : <CircleAlert />}
            {item.status}
           </Badge>
          }
         </TableCell>
        </TableRow>
       ))}
      </TableBody>
     </Table>
    </div>
   ) : (
    <div className="overflow-hidden rounded-md border h-24 flex items-center justify-center">
     <Title className={"text-lg"}>Nothing Pending For Clearance.</Title>
    </div>
   )}
  </>
 );
}
