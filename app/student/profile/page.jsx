import React from "react";
import PersonalDetails from "./sections/personal-details";
import StudentDetails from "./sections/student-details";

export default function ProfileIndex() {
 return (
  <section className="space-y-5">
   <PersonalDetails />
   <StudentDetails />
  </section>
 );
}
