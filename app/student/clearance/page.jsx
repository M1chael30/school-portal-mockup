import Title from "@/components/title";
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

const clearance = [
 {
  gradeLevel: "Grade 7",
  subject: "English",
  teacher: "Mr. Bayudang",
  status: "pending",
 },
 {
  gradeLevel: "Grade 7",
  subject: "Filipino",
  teacher: "Mr. Berber",
  status: "completed",
 },
 {
  gradeLevel: "Grade 7",
  subject: "Math",
  teacher: "Mr. Seeping",
  status: "pending",
 },
 {
  gradeLevel: "Grade 7",
  subject: "Science",
  teacher: "Mr. Tejano",
  status: "completed",
 },
 {
  gradeLevel: "Grade 7",
  subject: "ESP",
  teacher: "Mr. Santos",
  status: "completed",
 },
 {
  gradeLevel: "Grade 7",
  subject: "Science",
  teacher: "Mr. Tejano",
  status: "completed",
 },
];

const columnHead = ["Grade Level", "Subject", "Teacher", "Status"];

export default function ClearanceIndex() {
 return (
  <section className="space-y-6">
   <div>
    <Title className="text-start">Clearance</Title>
   </div>
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
      {clearance.length ? (
       clearance.map((item, index) => (
        <TableRow key={index}>
         <TableCell>{item.gradeLevel}</TableCell>
         <TableCell>{item.subject}</TableCell>
         <TableCell>{item.teacher}</TableCell>
         <TableCell>
          {item.status === "completed" && (
           <Badge
            variant={"secondary"}
            className="bg-blue-500 text-white dark:bg-blue-600"
           >
            <CircleCheck />
            {item.status}
           </Badge>
          )}
          {item.status === "pending" && (
           <Badge
            variant={"secondary"}
            className="bg-amber-500 text-white dark:bg-amber-600"
           >
            <CircleAlert />
            {item.status}
           </Badge>
          )}
         </TableCell>
        </TableRow>
       ))
      ) : (
       <TableRow colSpan={columnHead.length}>
        <TableCell className="text-center">No subjects to clear.</TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
  </section>
 );
}
