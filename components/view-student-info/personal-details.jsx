import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function PersonalDetails({ student = {} }) {
 return (
  <section className="space-y-5 print:space-y-5">
   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 print:grid print:grid-cols-4 print:gap-3">
    {/* title */}
    <div className="md:col-span-4 print:col-span-4">
     <Title className="text-start print:text-start">
      I - Learner's Personal Information
     </Title>
    </div>

    {/* last name */}
    <div className="md:col-span-4 lg:col-span-1">
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium print:font-medium">{student.last_name}</p>
    </div>

    {/* first name */}
    <div className="md:col-span-4 lg:col-span-1">
     <SubTitle>First Name</SubTitle>
     <p className="font-medium print:font-medium">{student.first_name}</p>
    </div>

    {/* middle name */}
    <div className="md:col-span-4 lg:col-span-1">
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium print:font-medium">{student.middle_name}.</p>
    </div>

    {/* extn name */}
    <div className="md:col-span-4 lg:col-span-1">
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium print:font-medium">{student.extension_name}</p>
    </div>
   </div>

   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 print:grid print:grid-cols-4 print:gap-3">
    {/* date of birth */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Date of Birth(yyyy/mm/dd)</SubTitle>
     <p className="font-medium print:font-medium">{student.date_of_birth}</p>
    </div>

    {/* age */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Age</SubTitle>
     <p className="font-medium print:font-medium">{student.age}</p>
    </div>

    {/* gender */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Gender</SubTitle>
     <p className="font-medium print:font-medium">{student.gender}</p>
    </div>

    {/* religion */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Religion</SubTitle>
     <p className="font-medium print:font-medium">{student.religion}</p>
    </div>

    {/* Indegeneous Peoples */}
    <div className="md:col-span-4 print:col-span-4">
     <SubTitle>
      Belonging to any Indigenous Peoples (IP) Community / Indigenous Cultural
      Community?
     </SubTitle>
     <p className="font-medium print:font-medium">
      {student.indeginous_people}
     </p>
    </div>

    {/* Indegeneous Peoples */}
    <div className="md:col-span-4 print:col-span-4">
     <SubTitle>Is the learner a person with disability (PWD)?</SubTitle>
     <p className="font-medium print:font-medium">
      {student.person_with_disability}
     </p>
    </div>

    {/* nationality */}
    <div className="md:col-span-4 lg:col-span-1">
     <SubTitle>Nationality</SubTitle>
     <p className="font-medium print:font-medium">{student.nationality}</p>
    </div>

    {/* place of birth */}
    <div className="md:col-span-3 lg:col-span-2 print:col-span-2">
     <SubTitle>Place of Birth</SubTitle>
     <p className="font-medium print:font-medium">{student.place_of_birth}</p>
    </div>

    {/* mobile number */}
    <div>
     <SubTitle>Mobile Number</SubTitle>
     <p className="font-medium print:font-medium">{student.phone_number}</p>
    </div>
   </div>
  </section>
 );
}
