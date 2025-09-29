"use client";

import { SelectInput } from "@/components/select-input";
import SubTitle from "@/components/sub-title";
import Title from "@/components/title";
import { studentNavmenu } from "@/lib/data";
import { useState } from "react";
import ReportCardTable from "./sections/report-card-table";

const studentGrades = [
 {
  schoolYear: "2022-2023",
  gradeAndSection: "Grade 7 Rizal",
  classAdviser: "Mr. Mark Robert DC. Bayudang",
  studentGrade: [
   {
    subject: "English",
    grades: ["90", "92", "91", "93"],
    finalAverage: "92",
    teacher: "Mr. Bayudang, Mark Robert DC.",
    remarks: "Passed",
   },
   {
    subject: "Math",
    grades: ["85", "87", "86", "88"],
    finalAverage: "87",
    teacher: "Mr. Tejano, Michael Jay Angelo G.",
    remarks: "Passed",
   },
   {
    subject: "Science",
    grades: ["88", "89", "90", "87"],
    finalAverage: "89",
    teacher: "Mr. Santos, Czianel F.",
    remarks: "Passed",
   },
   {
    subject: "ESP",
    grades: ["92", "93", "91", "94"],
    finalAverage: "93",
    teacher: "Mr. Seeping, Mel Moses M.",
    remarks: "Passed",
   },
   {
    subject: "MAPEH",
    grades: ["89", "90", "88", "91"],
    finalAverage: "90",
    teacher: "Mr. Tejano, Michael Jay Angelo G.",
    remarks: "Passed",
   },
   {
    subject: "Filipino",
    grades: ["87", "88", "86", "89"],
    finalAverage: "88",
    teacher: "Mr. Santos, Czianel F.",
    remarks: "Passed",
   },
  ],
 },
 {
  schoolYear: "2023-2024",
  gradeAndSection: "Grade 8 Bonifacio",
  classAdviser: "Mr. Santos, Czianel F.",
  studentGrade: [
   {
    subject: "English",
    grades: ["91", "90", "92", "94"],
    finalAverage: "92",
    teacher: "Mr. Mark Robert DC. Bayudang",
    remarks: "Passed",
   },
   {
    subject: "Math",
    grades: ["86", "88", "87", "89"],
    finalAverage: "88",
    teacher: "Mr. Tejano, Michael Jay Angelo G.",
    remarks: "Passed",
   },
   {
    subject: "Science",
    grades: ["89", "90", "91", "92"],
    finalAverage: "91",
    teacher: "Mr. Santos, Czianel F.",
    remarks: "Passed",
   },
   {
    subject: "ESP",
    grades: ["93", "94", "92", "95"],
    finalAverage: "94",
    teacher: "Mr. Seeping, Mel Moses M.",
    remarks: "Passed",
   },
   {
    subject: "MAPEH",
    grades: ["90", "91", "89", "92"],
    finalAverage: "91",
    teacher: "Mr. Tejano, Michael Jay Angelo G.",
    remarks: "Passed",
   },
   {
    subject: "Filipino",
    grades: ["88", "89", "87", "90"],
    finalAverage: "89",
    teacher: "Mr. Santos, Czianel F.",
    remarks: "Passed",
   },
  ],
 },
 {
  schoolYear: "2024-2025",
  gradeAndSection: "Grade 9 Mabini",
  classAdviser: "Mr. Seeping, Mel Moses M.",
  studentGrade: [
   {
    subject: "English",
    grades: ["92", "93", "91", "94"],
    finalAverage: "93",
    teacher: "Mr. Bayudang, Mark Robert DC.",
    remarks: "Passed",
   },
   {
    subject: "Math",
    grades: ["87", "89", "88", "90"],
    finalAverage: "89",
    teacher: "Mr. Tejano, Michael Jay Angelo G.",
    remarks: "Passed",
   },
   {
    subject: "Science",
    grades: ["90", "91", "92", "93"],
    finalAverage: "92",
    teacher: "Mr. Santos, Czianel F.",
    remarks: "Passed",
   },
   {
    subject: "ESP",
    grades: ["94", "95", "93", "96"],
    finalAverage: "95",
    teacher: "Mr. Seeping, Mel Moses M.",
    remarks: "Passed",
   },
   {
    subject: "MAPEH",
    grades: ["91", "92", "90", "93"],
    finalAverage: "92",
    teacher: "Mr. Tejano, Michael Jay Angelo G.",
    remarks: "Passed",
   },
   {
    subject: "Filipino",
    grades: ["89", "90", "88", "91"],
    finalAverage: "90",
    teacher: "Mr. Santos, Czianel F.",
    remarks: "Passed",
   },
  ],
 },
 {
  schoolYear: "2025-2026",
  gradeAndSection: "Grade 10 Luna",
  classAdviser: "Mr. Tejano, Michael Jay Angelo G.",
  studentGrade: [
   {
    subject: "English",
    grades: ["93", "94", "92", "95"],
    finalAverage: "94",
    teacher: "Mr. Bayudang, Mark Robert DC.",
    remarks: "Passed",
   },
   {
    subject: "Math",
    grades: ["88", "90", "89", "91"],
    finalAverage: "90",
    teacher: "Mr. Tejano, Michael Jay Angelo G.",
    remarks: "Passed",
   },
   {
    subject: "Science",
    grades: ["91", "92", "93", "94"],
    finalAverage: "93",
    teacher: "Mr. Santos, Czianel F.",
    remarks: "Passed",
   },
   {
    subject: "ESP",
    grades: ["95", "96", "94", "97"],
    finalAverage: "96",
    teacher: "Mr. Seeping, Mel Moses M.",
    remarks: "Passed",
   },
   {
    subject: "MAPEH",
    grades: ["92", "93", "91", "94"],
    finalAverage: "93",
    teacher: "Mr. Tejano, Michael Jay Angelo G.",
    remarks: "Passed",
   },
   {
    subject: "Filipino",
    grades: ["90", "91", "89", "92"],
    finalAverage: "91",
    teacher: "Mr. Santos, Czianel F.",
    remarks: "Passed",
   },
  ],
 },
];

const schoolYear = ["2022-2023", "2023-2024", "2024-2025", "2025-2026"];

const columnHead = [
 "Subject Name",
 "Subject Teacher",
 "Quarter 1",
 "Quarter 2",
 "Quarter 3",
 "Quarter 4",
 "Final Average",
 "Remarks",
];

export default function ReportCardIndex() {
 const [value, setValue] = useState("");

 const filteredStudent = studentGrades.filter(
  (student) => student.schoolYear === value
 );

 const gradeSectionAndAdviser = studentGrades.find(
  (item) => item.schoolYear === value
 );

 return (
  <section className="space-y-6">
   <div className="flex justify-between">
    <div className="space-y-5">
     <Title className="text-start">Student Report Card</Title>
     <div className="">
      <SubTitle>Student LRN: {studentNavmenu.user.studentId}</SubTitle>
      <SubTitle>Student Name: {studentNavmenu.user.name}</SubTitle>
      <SubTitle>
       Grade and Section:{" "}
       {gradeSectionAndAdviser ? gradeSectionAndAdviser.gradeAndSection : "N/A"}
      </SubTitle>
      <SubTitle>
       Section Adviser:{" "}
       {gradeSectionAndAdviser ? gradeSectionAndAdviser.classAdviser : "N/A"}
      </SubTitle>
     </div>
    </div>
    <div className="flex items-end">
     <div className="">
      <SelectInput
       selectLabel={"School Year"}
       selectValue={"Filter by School Year"}
       data={schoolYear}
       onValueChange={setValue}
      />
     </div>
    </div>
   </div>
   {value ? (
    <div className="overflow-hidden rounded-md border">
     <ReportCardTable column={columnHead} data={filteredStudent} />
    </div>
   ) : (
    <div className="overflow-hidden rounded-md border h-24 flex items-center justify-center">
     <Title className={"text-base"}>
      Please provide a school year to show grades.
     </Title>
    </div>
   )}
  </section>
 );
}
