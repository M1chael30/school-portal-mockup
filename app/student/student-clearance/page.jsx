import Title from "@/components/title";
import ClearanceTable from "./sections/clearance-table";
import SubTitle from "@/components/sub-title";
import { studentNavmenu } from "@/lib/data";

const clearance = [
 {
  gradeLevel: "Grade 10",
  subject: "English",
  subjectCode: "ENG 10",
  teacher: "Mr. Bayudang, Mark Robert DC.",
  status: "completed",
 },
 {
  gradeLevel: "Grade 10",
  subjectCode: "FIL 10",
  subject: "Filipino",
  teacher: "Mr. Berber, Carmel Loresiane H.",
  status: "completed",
 },
 {
  gradeLevel: "Grade 10",
  subjectCode: "MATH 10",
  subject: "Math",
  teacher: "Mr. Seeping, Mel Moses M.",
  status: "completed",
 },
 {
  gradeLevel: "Grade 10",
  subjectCode: "SCI 10",
  subject: "Science",
  teacher: "Mr. Tejano, Michael Jay Angelo G.",
  status: "completed",
 },
 {
  gradeLevel: "Grade 10",
  subjectCode: "ESP 10",
  subject: "ESP",
  teacher: "Mr. Santos, Czianel F.",
  status: "completed",
 },
];

const columnHead = [
 "Grade Level",
 "Subject Code",
 "Subject Title",
 "Subject Teacher",
 "Status",
];

export default function ClearanceIndex() {
 const { name, studentId } = studentNavmenu.user;

 return (
  <section className="space-y-6">
   <div>
    <Title className="text-start">Student Clearance / SY 2025 - 2026</Title>
    <SubTitle>Student LRN: {studentId}</SubTitle>
    <SubTitle>Student Name: {name}</SubTitle>
   </div>

   {/* table */}
   <ClearanceTable columnHead={columnHead} data={clearance} />
  </section>
 );
}
