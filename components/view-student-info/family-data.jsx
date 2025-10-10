import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function FamilyData({ student = {} }) {
 return (
  <section className="space-y-5 print:space-y-5">
   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 print:grid print:grid-cols-4 print:gap-3">
    {/* title */}
    <div className="md:col-span-4 print:col-span-4">
     <Title className="text-start print:text-start">IV - Family Data</Title>
    </div>

    {/* father's name */}
    <div className="md:col-span-4 print:col-span-4">
     <Title className="text-start italic text-base print:text-start print:italic print:text-base">
      Father's Name:
     </Title>
    </div>

    {/* last name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.fathers_last_name}
     </p>
    </div>

    {/* first name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>First Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.fathers_first_name}
     </p>
    </div>

    {/* middle name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.fathers_middle_name}
     </p>
    </div>

    {/* extn name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium print:font-medium">
      {student.fathers_extension_name}
     </p>
    </div>
   </div>

   <hr />
   
   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 print:grid print:grid-cols-4 print:gap-3">
    {/* mother's maiden name */}
    <div className="md:col-span-4 print:col-span-4">
     <Title className="text-start italic text-base print:text-start print:italic print:text-base">
      Mother's Maiden Name:
     </Title>
    </div>

    {/* last name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.mothers_last_name}
     </p>
    </div>

    {/* first name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>First Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.mothers_first_name}
     </p>
    </div>

    {/* middle name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.mothers_middle_name}
     </p>
    </div>

    {/* extn name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium print:font-medium">
      {student.mothers_extension_name}
     </p>
    </div>
   </div>

   <hr />

   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 print:grid print:grid-cols-4 print:gap-3">
    {/* legal guardian's name */}
    <div className="md:col-span-4 print:col-span-4">
     <Title className="text-start italic text-base print:text-start print:italic print:text-base">
      Legal Guardian's Name:
     </Title>
    </div>

    {/* last name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.legal_guardian_last_name}
     </p>
    </div>

    {/* first name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>First Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.legal_guardian_first_name}
     </p>
    </div>

    {/* middle name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.legal_guardian_middle_name}
     </p>
    </div>

    {/* extn name */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium print:font-medium">
      {student.legal_guardian_extension_name}
     </p>
    </div>
   </div>
  </section>
 );
}
