import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function FamilyData() {
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
    <div>
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium print:font-medium">Last Name</p>
    </div>

    {/* first name */}
    <div>
     <SubTitle>First Name</SubTitle>
     <p className="font-medium print:font-medium">First Name</p>
    </div>

    {/* middle name */}
    <div>
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium print:font-medium">Middle Name</p>
    </div>

    {/* extn name */}
    <div>
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium print:font-medium"></p>
    </div>
   </div>

   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 print:grid print:grid-cols-4 print:gap-3">
    {/* mother's maiden name */}
    <div className="md:col-span-4 print:col-span-4">
     <Title className="text-start italic text-base print:text-start print:italic print:text-base">
      Mother's Maiden Name:
     </Title>
    </div>

    {/* last name */}
    <div>
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium print:font-medium">Last Name</p>
    </div>

    {/* first name */}
    <div>
     <SubTitle>First Name</SubTitle>
     <p className="font-medium print:font-medium">First Name</p>
    </div>

    {/* middle name */}
    <div>
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium print:font-medium">Middle Name</p>
    </div>

    {/* extn name */}
    <div>
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium print:font-medium"></p>
    </div>
   </div>

   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 print:grid print:grid-cols-4 print:gap-3">
    {/* legal guardian's name */}
    <div className="md:col-span-4 print:col-span-4">
     <Title className="text-start italic text-base print:text-start print:italic print:text-base">
      Legal Guardian's Name:
     </Title>
    </div>

    {/* last name */}
    <div>
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium print:font-medium">Last Name</p>
    </div>

    {/* first name */}
    <div>
     <SubTitle>First Name</SubTitle>
     <p className="font-medium print:font-medium">First Name</p>
    </div>

    {/* middle name */}
    <div>
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium print:font-medium">Middle Name</p>
    </div>

    {/* extn name */}
    <div>
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium print:font-medium"></p>
    </div>
   </div>
  </section>
 );
}
