"use client";

import React from "react";
import { studentList } from "@/lib/data";
import { useReactToPrint } from "react-to-print";
import Title from "@/components/title";
import ClassListFilters from "./sections/class-list-filters";
import ClassListTable from "./sections/class-list-table";
import PrintBtn from "@/components/print-btn";
import SubTitle from "@/components/sub-title";

const columnHead = ["Student LRN", "Student Name", "Grade Level", "Section"];

const schoolYear = ["2022-2023", "2023-2024", "2024-2025", "2025-2026"];

export default function ClassList() {
 const [filters, setFilters] = React.useState({
  subject: "",
 });

 const contentRef = React.useRef(null);

 const reactToPrintFn = useReactToPrint({ contentRef });

 const updateFilter = (key, value) => {
  setFilters((prev) => ({ ...prev, [key]: value }));
 };

 const uniqueStudents = Object.values(
  studentList.students.reduce((acc, student) => {
   acc[student.student_lrn] = {
    student_lrn: student.student_lrn,
    subject: student.subject,
    student_name: student.student_name,
    grade_level: student.grade_level,
    section: student.section,
   };

   return acc;
  }, {})
 );

 const filteredClassList = uniqueStudents.filter(
  (cls) => cls.subject === filters.subject
 );

 return (
  <section ref={contentRef} className="space-y-6">
   {/* Page Header */}
   <div className="flex flex-col gap-3 items-center">
    {/* description */}
    <div>
     <Title>Class List</Title>
     <SubTitle className="hidden print:block">SY / 2025 - 2026</SubTitle>
    </div>

    {/* Filters */}
    <ClassListFilters
     schoolYear={schoolYear}
     subjects={studentList.subjects}
     updateFilter={updateFilter}
    />
   </div>

   {/* print btn */}
   {filters.subject && <PrintBtn print={reactToPrintFn} />}

   {/* Table Content */}
   <ClassListTable
    studentData={filteredClassList}
    filters={filters}
    columnHead={columnHead}
   />
  </section>
 );
}
