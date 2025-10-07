import Title from "@/components/title";
import React from "react";
import StudentRegistrationForm from "./sections/student-registration-form";

const studentStatus = ["New", "Old", "Transferee"];

const gradeLevel = [7, 8, 9, 10];

const gender = ["Male", "Female"];

export default function Registration() {
 return (
  <section className="space-y-5">
   {/* title */}
   <div>
    <Title>Student Registration</Title>
   </div>

   {/* content */}
   <StudentRegistrationForm
    studentStatus={studentStatus}
    gradeLevel={gradeLevel}
    gender={gender}
   />
  </section>
 );
}
