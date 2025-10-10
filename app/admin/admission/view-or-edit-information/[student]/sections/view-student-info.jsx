"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Title from "@/components/title";
import PrintBtn from "@/components/print-btn";
import GeneralInformation from "@/components/view-student-info/general-information";
import PersonalDetails from "@/components/view-student-info/personal-details";
import ResidenceData from "@/components/view-student-info/residence-data";
import PhysicalDescription from "@/components/view-student-info/physical-description";
import FamilyData from "@/components/view-student-info/family-data";

export default function ViewStudentInfo({ student = {} }) {
 const contentRef = useRef(null);
 const reactToPrintFn = useReactToPrint({
  contentRef,
 });

 return (
  <section ref={contentRef} className="space-y-10 print:space-y-10">
   <PrintBtn print={reactToPrintFn} />
   <Title className="print:text-center">
    General Student Personal Information Sheet (GSPIS)
   </Title>
   <GeneralInformation student={student} />
   <hr />
   <PersonalDetails student={student} />
   <hr />
   <ResidenceData student={student.learners_residence_data} />
   <hr />
   <PhysicalDescription student={student.physical_description} />
   <hr />
   <FamilyData student={student.family_data} />
  </section>
 );
}
