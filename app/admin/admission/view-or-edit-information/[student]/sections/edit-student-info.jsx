import { Button } from "@/components/ui/button";
import Title from "@/components/title";
import GeneralInformation from "@/components/edit-student-info/general-information";
import PersonalDetails from "@/components/edit-student-info/personal-details";
import ResidenceData from "@/components/edit-student-info/residence-data";
import PhysicalDescription from "@/components/edit-student-info/physical-description";
import FamilyData from "@/components/edit-student-info/family-data";

export default function EditStudentInfo({ student = {} }) {
 return (
  <section className="space-y-10">
   <Title className="text-center">
    Edit General Student Personal Information Sheet (GSPIS)
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
   <Button>Save Changes</Button>
  </section>
 );
}
