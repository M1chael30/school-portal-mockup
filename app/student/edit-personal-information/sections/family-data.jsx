import Title from "@/components/title";
import SubTitle from "@/components/sub-title";
import { Input } from "@/components/ui/input";

export default function FamilyData() {
 return (
  <section className="space-y-5">
   <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
    {/* title */}
    <div className="md:col-span-4">
     <Title className="text-start">IV - Family Data</Title>
    </div>

    {/* father's name */}
    <div className="md:col-span-4">
     <Title className="text-start italic text-base">Father's Name:</Title>
    </div>

    {/* last name */}
    <div className="space-y-2">
     <SubTitle>Last Name</SubTitle>
     <Input defaultValue="Last Name" />
    </div>

    {/* first name */}
    <div className="space-y-2">
     <SubTitle>First Name</SubTitle>
     <Input defaultValue="First Name" />
    </div>

    {/* middle name */}
    <div className="space-y-2">
     <SubTitle>Middle Name</SubTitle>
     <Input defaultValue="Middle Name" />
    </div>

    {/* extn name */}
    <div className="space-y-2">
     <SubTitle>(Extn. Name if any)</SubTitle>
     <Input placeholder="Extn. Name" />
    </div>
   </div>

   <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
    {/* mother's maiden name */}
    <div className="md:col-span-4">
     <Title className="text-start italic text-base">
      Mother's Maiden Name:
     </Title>
    </div>

    {/* last name */}
    <div className="space-y-2">
     <SubTitle>Last Name</SubTitle>
     <Input defaultValue="Last Name" />
    </div>

    {/* first name */}
    <div className="space-y-2">
     <SubTitle>First Name</SubTitle>
     <Input defaultValue="First Name" />
    </div>

    {/* middle name */}
    <div className="space-y-2">
     <SubTitle>Middle Name</SubTitle>
     <Input defaultValue="Middle Name" />
    </div>

    {/* extn name */}
    <div className="space-y-2">
     <SubTitle>(Extn. Name if any)</SubTitle>
     <Input placeholder="Extn. Name" />
    </div>
   </div>

   <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
    {/* legal guardian's name */}
    <div className="md:col-span-4">
     <Title className="text-start italic text-base">
      Legal Guardian's Name:
     </Title>
    </div>

    {/* last name */}
    <div className="space-y-2">
     <SubTitle>Last Name</SubTitle>
     <Input defaultValue="Last Name" />
    </div>

    {/* first name */}
    <div className="space-y-2">
     <SubTitle>First Name</SubTitle>
     <Input defaultValue="First Name" />
    </div>

    {/* middle name */}
    <div className="space-y-2">
     <SubTitle>Middle Name</SubTitle>
     <Input defaultValue="Middle Name" />
    </div>

    {/* extn name */}
    <div className="space-y-2">
     <SubTitle>(Extn. Name if any)</SubTitle>
     <Input placeholder="Extn. Name" />
    </div>
   </div>
  </section>
 );
}
