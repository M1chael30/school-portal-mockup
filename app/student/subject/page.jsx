import SubTitle from "@/components/sub-title";
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
import { CircleCheck } from "lucide-react";

const clearance = [
 {
  subject: "English",
  teacher: "Mr. Bayudang",
  status: "Enrolled",
 },
 {
  subject: "Filipino",
  teacher: "Mr. Berber",
  status: "Enrolled",
 },
 {
  subject: "Math",
  teacher: "Mr. Seeping",
  status: "Enrolled",
 },
 {
  subject: "Science",
  teacher: "Mr. Tejano",
  status: "Enrolled",
 },
 {
  subject: "ESP",
  teacher: "Mr. Santos",
  status: "Enrolled",
 },
 {
  subject: "Science",
  teacher: "Mr. Tejano",
  status: "Enrolled",
 },
];

const columnHead = ["Subject", "Teacher", "Status"];

export default function SubjectIndex() {
 return (
  <section className="space-y-6">
   <div>
    <Title className="text-start">Subjects Enrolled</Title>
    <SubTitle>Grade 7</SubTitle>
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
         <TableCell>{item.subject}</TableCell>
         <TableCell>{item.teacher}</TableCell>
         <TableCell>
          <Badge
           variant={"secondary"}
           className="bg-green-500 text-white dark:bg-green-600"
          >
           <CircleCheck />
           {item.status}
          </Badge>
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
