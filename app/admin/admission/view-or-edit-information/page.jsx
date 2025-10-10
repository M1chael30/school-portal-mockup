"use client";

import Title from "@/components/title";
import StudentFilters from "./sections/student-filter";
import StudentTable from "./sections/student-table";
import { useState } from "react";
import { studentsInfo } from "@/lib/data";

const columnHead = [
 "Student LRN",
 "Student Name",
 "Grade Level",
 "Class Section",
 "Action",
];

export default function ViewOrEditInformation() {
 const [filter, setFilter] = useState({
  searchTerm: "",
 });

 const filters = (key, value) => {
  setFilter((prev) => ({
   ...prev,
   [key]: value,
  }));
 };

 const filteredStudentInfo = studentsInfo.filter(
  (student) =>
   student.student_lrn.includes(filter.searchTerm) ||
   student.last_name.includes(filter.searchTerm) ||
   student.first_name.includes(filter.searchTerm) ||
   student.middle_name.includes(filter.searchTerm)
 );

 return (
  <section className="space-y-6">
   {/* title */}
   <div>
    <Title>View or Edit Student Information</Title>
   </div>

   {/* filters */}
   <StudentFilters filters={filters} />

   {/* student table */}
   {filter.searchTerm ? (
    <StudentTable columnHead={columnHead} data={filteredStudentInfo} />
   ) : (
    <div className="overflow-hidden rounded-md border h-30 flex items-center justify-center">
     <Title className="text-base">Search student LRN to show data.</Title>
    </div>
   )}
  </section>
 );
}
