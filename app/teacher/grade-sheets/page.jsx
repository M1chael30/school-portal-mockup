"use client";

import Title from "@/components/title";
import React from "react";
import StudentGradesTable from "./sections/student-grades-table";
import StudentFilters from "./sections/student-filters";
import { studentList } from "@/lib/data";

const columnHead = [
 "Student LRN",
 "Student Name",
 "Grade Level",
 "Section",
 "Grade",
 "Remarks",
];

const schoolYear = ["2022-2023", "2023-2024", "2024-2025", "2025-2026"];

const remarks = ["Failed", "Passed"];

const quarters = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];

export default function StudentGradesIndex() {
 const [filters, setFilters] = React.useState({
  quarter: "",
  subject: "",
 });

 const updateFilter = (key, value) => {
  setFilters((prev) => ({ ...prev, [key]: value }));
 };

 const filteredClasses = studentList.students.filter(
  (cls) => cls.subject === filters.subject && cls.quarter === filters.quarter
 );

 return (
  <section className="space-y-6">
   {/* Page Header */}
   <div className="flex flex-col gap-3 items-center">
    {/* description */}
    <div>
     <Title>Grade Sheets</Title>
    </div>

    {/* Filters */}
    <StudentFilters
     subjects={studentList.subjects}
     quarters={quarters}
     schoolYear={schoolYear}
     updateFilter={updateFilter}
    />
   </div>

   {/* Table Content */}
   <StudentGradesTable
    studentData={filteredClasses}
    filters={filters}
    columnHead={columnHead}
    remarks={remarks}
   />
  </section>
 );
}
