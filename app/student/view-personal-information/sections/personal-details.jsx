import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function PersonalDetails() {
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
    <div>
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium print:font-medium">Cocjin</p>
    </div>

    {/* first name */}
    <div>
     <SubTitle>First Name</SubTitle>
     <p className="font-medium print:font-medium">Jeff Eric</p>
    </div>

    {/* middle name */}
    <div>
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium print:font-medium">DC.</p>
    </div>

    {/* extn name */}
    <div>
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium print:font-medium"></p>
    </div>
   </div>

   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 print:grid print:grid-cols-4 print:gap-3">
    {/* date of birth */}
    <div>
     <SubTitle>Date of Birth(mm/dd/yyyy)</SubTitle>
     <p className="font-medium print:font-medium">07/30/2004</p>
    </div>

    {/* age */}
    <div>
     <SubTitle>Age</SubTitle>
     <p className="font-medium print:font-medium">21</p>
    </div>

    {/* gender */}
    <div>
     <SubTitle>Gender</SubTitle>
     <p className="font-medium print:font-medium">Male</p>
    </div>

    {/* religion */}
    <div>
     <SubTitle>Religion</SubTitle>
     <p className="font-medium print:font-medium">Roman Catholic</p>
    </div>

    {/* Indegeneous Peoples */}
    <div className="md:col-span-4 print:col-span-4">
     <SubTitle>
      Belonging to any Indigenous Peoples (IP) Community / Indigenous Cultural
      Community?
     </SubTitle>
     <p className="font-medium print:font-medium">No</p>
    </div>

    {/* Indegeneous Peoples */}
    <div className="md:col-span-4 print:col-span-4">
     <SubTitle>Is the learner a person with disability (PWD)?</SubTitle>
     <p className="font-medium print:font-medium">No</p>
    </div>

    {/* nationality */}
    <div>
     <SubTitle>Nationality</SubTitle>
     <p className="font-medium print:font-medium">Filipino</p>
    </div>

    {/* place of birth */}
    <div className="md:col-span-2 print:col-span-2">
     <SubTitle>Place of Birth</SubTitle>
     <p className="font-medium print:font-medium">
      Premiere, Cabanatuan City, Nueva Ecija
     </p>
    </div>

    {/* mobile number */}
    <div>
     <SubTitle>Mobile Number</SubTitle>
     <p className="font-medium print:font-medium">09123456789</p>
    </div>
   </div>
  </section>
 );
}
