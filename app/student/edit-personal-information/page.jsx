import Title from "@/components/title";
import React from "react";
import GeneralInformation from "./sections/general-information";
import PersonalDetails from "./sections/personal-details";
import ResidenceData from "./sections/residence-data";
import PhysicalDescription from "./sections/physical-description";
import FamilyData from "./sections/family-data";
import { Button } from "@/components/ui/button";

export default function EditPersonalInformation() {
 return (
  <section className="space-y-10">
   <Title className="text-center">
    Edit General Student Personal Information Sheet (GSPIS)
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
   <Button>Save Changes</Button>
  </section>
 );
}
