import Title from "@/components/title";
import SubTitle from "@/components/sub-title";
import { SelectInput } from "@/components/select-input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

const gender = ["Male", "Female"];

const religion = [
 "Baptist",
 "Iglesia Ni Cristo",
 "Methodist",
 "Roman Catholic",
];

export default function PersonalDetails() {
 return (
  <section className="space-y-5">
   <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
    {/* title */}
    <div className="md:col-span-4">
     <Title className="text-start">I - Learner's Personal Information</Title>
    </div>

    {/* last name */}
    <div>
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium">Cocjin</p>
    </div>

    {/* first name */}
    <div>
     <SubTitle>First Name</SubTitle>
     <p className="font-medium">Jeff Eric</p>
    </div>

    {/* middle name */}
    <div>
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium">DC.</p>
    </div>

    {/* extn name */}
    <div>
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium"></p>
    </div>
   </div>

   <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
    {/* date of birth */}
    <div>
     <SubTitle>Date of Birth(mm/dd/yyyy)</SubTitle>
     <p className="font-medium">07/30/2004</p>
    </div>

    {/* age */}
    <div>
     <SubTitle>Age</SubTitle>
     <p className="font-medium">21</p>
    </div>

    {/* gender */}
    <div className="grid gap-2">
     <SubTitle>Gender</SubTitle>
     <SelectInput
      selectLabel={"Gender"}
      selectValue={"Gender"}
      data={gender}
      defaultValue="Male"
     />
    </div>

    {/* religion */}
    <div className="grid gap-2">
     <SubTitle>Religion</SubTitle>
     <SelectInput
      selectLabel={"Religion"}
      selectValue={"Religion"}
      data={religion}
      defaultValue="Roman Catholic"
     />
    </div>

    {/* Indigenous Peoples */}
    <div className="md:col-span-4 space-y-3">
     <SubTitle>
      Belonging to any Indigenous Peoples (IP) Community / Indigenous Cultural
      Community?
     </SubTitle>

     <RadioGroup defaultValue="no">
      <div className="flex gap-3 md:flex-row flex-col">
       <div className="flex items-center space-x-2">
        <RadioGroupItem value="no" id="no" />
        <Label htmlFor="no">No</Label>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
         <RadioGroupItem value="yes" id="yes" />
         <Label htmlFor="yes">Yes, if yes please specify: </Label>
        </div>
        <div className="md:col-span-2">
         <Input placeholder="Type of Indigenous People" />
        </div>
       </div>
      </div>
     </RadioGroup>
    </div>

    {/* person with disability */}
    <div className="md:col-span-4 space-y-3">
     <SubTitle>Is the learner a person with disability (PWD)?</SubTitle>

     <RadioGroup defaultValue="no">
      <div className="flex gap-3 md:flex-row flex-col">
       <div className="flex items-center space-x-2">
        <RadioGroupItem value="no" id="no" />
        <Label htmlFor="no">No</Label>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
         <RadioGroupItem value="yes" id="yes" />
         <Label htmlFor="yes">Yes, if yes please specify: </Label>
        </div>
        <div className="md:col-span-2">
         <Input placeholder="Type of Indigenous People" />
        </div>
       </div>
      </div>
     </RadioGroup>
    </div>

    {/* nationality */}
    <div>
     <SubTitle>Nationality</SubTitle>
     <p className="font-medium">Filipino</p>
    </div>

    {/* place of birth */}
    <div className="md:col-span-2 space-y-2">
     <SubTitle>Place of Birth</SubTitle>
     <Input defaultValue="Premiere, Cabanatuan City, Nueva Ecija" />
    </div>

    {/* mobile number */}
    <div className="space-y-2">
     <SubTitle>Mobile Number</SubTitle>
     <Input defaultValue="09123456789" />
    </div>
   </div>
  </section>
 );
}
