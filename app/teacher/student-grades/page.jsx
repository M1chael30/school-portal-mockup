"use client";

import Title from "@/components/title";
import React from "react";
import SubTitle from "@/components/sub-title";
import StudentGradesTable from "./sections/student-grades-table";
import StudentFilters from "./sections/student-filters";
import { studentList } from "@/lib/data";

const columnHead = [
 "Student LRN",
 "Student Name",
 // "Quarter 1",
 // "Quarter 2",
 // "Quarter 3",
 // "Quarter 4",
 // "Average",
 // "Remarks",
 "Action",
];

const gradeAndSection = ["Grade 7 - Rizal", "Grade 10 - Luna"];

export default function StudentGradesIndex() {
 const [filters, setFilters] = React.useState({
  gradeAndSection: "",
  subject: "",
  searchTerm: "",
 });

 const updateFilter = (key, value) => {
  setFilters((prev) => ({ ...prev, [key]: value }));
 };

 const filteredClasses = studentList.students.filter(
  (cls) =>
   cls.section === filters.gradeAndSection &&
   cls.subject === filters.subject &&
   cls.student_name.toLowerCase().includes(filters.searchTerm.toLowerCase())
 );

 return (
  <section className="space-y-6">
   {/* Page Header */}
   <div className="flex justify-between">
    {/* description */}
    <div>
     <Title className="text-start">Student Grades</Title>
     <SubTitle>Grade and Section: {filters.gradeAndSection || "N/A"}</SubTitle>
     <SubTitle>Subject: {filters.subject || "N/A"}</SubTitle>
    </div>

    {/* Filters */}
    <StudentFilters
     subjects={studentList.subjects}
     gradeAndSection={gradeAndSection}
     updateFilter={updateFilter}
    />
   </div>

   {/* Table Content */}
   <StudentGradesTable
    studentData={filteredClasses}
    filters={filters}
    columnHead={columnHead}
   />
  </section>
 );
}
