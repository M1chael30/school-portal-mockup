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

const subjectsEnrolled = [
 {
  subjectCode: "ENG 10",
  subject: "English",
  teacher: "Mr. Bayudang, Mark Robert DC.",
  status: "Enrolled",
 },
 {
  subjectCode: "FIL 10",
  subject: "Filipino",
  teacher: "Mr. Berber, Carmel Loresiane H.",
  status: "Enrolled",
 },
 {
  subjectCode: "MATH 10",
  subject: "Math",
  teacher: "Mr. Seeping, Mel Moses M.",
  status: "Enrolled",
 },
 {
  subjectCode: "SCI 10",
  subject: "Science",
  teacher: "Mr. Tejano, Michael Jay Angelo G.",
  status: "Enrolled",
 },
 {
  subjectCode: "MAPEH 10",
  subject: "MAPEH(Music, Arts, Physical Education, Health)",
  teacher: "Mr. Tejano, Michael Jay Angelo G.",
  status: "Enrolled",
 },
 {
  subjectCode: "ESP 10",
  subject: "ESP(Edukasyon sa Pag-Papakatao)",
  teacher: "Mr. Santos, Czianel F.",
  status: "Enrolled",
 },
];

const columnHead = ["Subject Code", "Subject Title", "Status"];

export default function SubjectIndex() {
 return (
  <section className="space-y-6">
   <div>
    <Title className="text-start">
     Enrolled Subjects For Grade 10 / SY 2025-2026
    </Title>
    <SubTitle>Date officially enrolled: 06/27/2025 </SubTitle>
    <SubTitle></SubTitle>
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
      {subjectsEnrolled.length ? (
       subjectsEnrolled.map((item, index) => (
        <TableRow key={index}>
         <TableCell>{item.subjectCode}</TableCell>
         <TableCell>{item.subject}</TableCell>
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
        <TableCell className="text-center">No subjects enrolled.</TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
  </section>
 );
}
