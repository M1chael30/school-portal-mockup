"use client";

import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import GeneralInformation from "./sections/general-information";
import PersonalDetails from "./sections/personal-details";
import ResidenceData from "./sections/residence-data";
import PhysicalDescription from "./sections/physical-description";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import FamilyData from "./sections/family-data";
import PrintBtn from "@/components/print-btn";

export default function ProfileIndex() {
 const contentRef = useRef(null);
 const reactToPrintFn = useReactToPrint({
  contentRef,
 });

 return (
  <section
   ref={contentRef}
   className="space-y-10 print:space-y-10"
  >
   <PrintBtn print={reactToPrintFn} />
   <Title className="print:text-center">
    General Student Personal Information Sheet (GSPIS)
   </Title>
   <GeneralInformation />
   <hr />
   <PersonalDetails />
   <hr />
   <ResidenceData />
   <hr />
   <PhysicalDescription />
   <hr />
   <FamilyData />
  </section>
 );
}
