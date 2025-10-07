import Title from "@/components/title";
import React from "react";
import AddSchoolForm from "./sections/add-school-form";
import SchoolListings from "./sections/school-listings";

const schoolType = ["Private", "Public"];

const columnHead = [
 "School Code",
 "School Name",
 "School Type",
 "School Address",
];

const existingSchools = [
 {
  SchoolCode: "WUP",
  SchoolName: "Wesleyan University-Philippines",
  SchoolType: "Private",
  SchoolAddress: "Cabanatuan City, Nueva Ecija",
 },
 {
  SchoolCode: "NEUST",
  SchoolName: "Nueva Ecija University of Science and Technology",
  SchoolType: "Public",
  SchoolAddress: "Cabanatuan City, Nueva Ecija",
 },
];

export default function AccreditedSchoolsList() {
 return (
  <section className="space-y-5">
   {/* title */}
   <div>
    <Title>Schools Accredited Page</Title>
   </div>

   {/* add school form */}
   <AddSchoolForm schoolType={schoolType} />

   {/* list of existing school */}
   <div>
    <Title>List of Existing Schools Accredited</Title>
    <p>Total Schools: {existingSchools.length}</p>
   </div>
   <SchoolListings columnHead={columnHead} existingSchools={existingSchools} />
  </section>
 );
}
