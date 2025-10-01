import { Badge } from "@/components/ui/badge";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { CircleCheck } from "lucide-react";

export default function SubjectsEnrolledTable({ columnHead, data }) {
 return (
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
    {data ? (
     data.map((item, index) => (
      <TableRow key={index}>
       <TableCell>{item.subjectCode}</TableCell>
       <TableCell>{item.subject}</TableCell>
       <TableCell>
        <Badge
         variant={"secondary"}
         className="bg-green-500 text-white dark:bg-green-600 print:text-white print:bg-green-500"
        >
         <CircleCheck />
         {item.status}
        </Badge>
       </TableCell>
      </TableRow>
     ))
    ) : (
     <TableRow colSpan={columnHead.length}>
      <TableCell className="text-center print:text-center">
       No subjects enrolled.
      </TableCell>
     </TableRow>
    )}
   </TableBody>
  </Table>
 );
}
