"use client";

import Title from "@/components/title";
import SubjectListingFilters from "./sections/subject-listing-filters";
import SubjectTable from "./sections/subject-table";
import { useState } from "react";

const colHead = ["Subject Code", "Subject Name", "Subject Description"];

const gradeLevel = [7, 8, 9, 10];

const existingSubjects = [
 {
  gradeLevel: 7,
  subjects: [
   {
    subjectCode: "ENG 7",
    subjectName: " English",
    subjectDescription: "Basic English",
   },
   {
    subjectCode: "MATH 7",
    subjectName: "Math",
    subjectDescription: "Basic Algebra",
   },
   {
    subjectCode: "FIL 7",
    subjectName: "Filipino",
    subjectDescription: "Alpabetong Pilipino",
   },
   {
    subjectCode: "SCI 7",
    subjectName: "Science",
    subjectDescription: "Earth Science",
   },
  ],
 },
 {
  gradeLevel: 8,
  subjects: [
   {
    subjectCode: "ENG 8",
    subjectName: " English",
    subjectDescription: "Grammar",
   },
   {
    subjectCode: "MATH 8",
    subjectName: "Math",
    subjectDescription: "Geometry",
   },
   {
    subjectCode: "FIL 8",
    subjectName: "Filipino",
    subjectDescription: "Alamat at mga Kwento",
   },
   {
    subjectCode: "SCI 8",
    subjectName: "Science",
    subjectDescription: "Biology",
   },
  ],
 },
 {
  gradeLevel: 9,
  subjects: [
   {
    subjectCode: "ENG 9",
    subjectName: " English",
    subjectDescription: "Pronounciation and Punction",
   },
   {
    subjectCode: "MATH 9",
    subjectName: "Math",
    subjectDescription: "Trigonometry",
   },
   {
    subjectCode: "FIL 9",
    subjectName: "Filipino",
    subjectDescription: " Kasaysayan",
   },
   {
    subjectCode: "SCI 9",
    subjectName: "Science",
    subjectDescription: "Chemistry",
   },
  ],
 },
 {
  gradeLevel: 10,
  subjects: [
   {
    subjectCode: "ENG 10",
    subjectName: " English",
    subjectDescription: "Advance English",
   },
   {
    subjectCode: "MATH 10",
    subjectName: "Math",
    subjectDescription: "Advance Mathematics",
   },
   {
    subjectCode: "FIL 10",
    subjectName: "Filipino",
    subjectDescription: "Panitikang Pilipino",
   },
   {
    subjectCode: "SCI 10",
    subjectName: "Science",
    subjectDescription: "Physics",
   },
  ],
 },
];

export default function SubjectListings() {
 const [filter, setFilter] = useState("");

 const filteredSubjects = existingSubjects.filter(
  (subject) => subject.gradeLevel === Number(filter)
 );

 return (
  <section className="space-y-5">
   {/* title */}
   <div>
    <Title>Subject Listings</Title>
   </div>

   {/* filters */}
   <SubjectListingFilters gradeLevel={gradeLevel} setFilter={setFilter} />

   {/* subject table */}
   {filter ? (
    <SubjectTable
     columnHead={colHead}
     subjects={filteredSubjects}
     filter={filter}
    />
   ) : (
    <div className="overflow-hidden rounded-md border h-30 flex items-center justify-center">
     <p>Provide a grade level to show subjects.</p>
    </div>
   )}
  </section>
 );
}
