import Title from "@/components/title";
import SubTitle from "@/components/sub-title";
import { SelectInput } from "@/components/select-input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import TextInput from "../text-input";

const gender = ["Male", "Female"];

const religion = [
 "Baptist",
 "Iglesia ni Cristo",
 "Methodist",
 "Roman Catholic",
];

export default function PersonalDetails({ student = {} }) {
 return (
  <section className="space-y-5">
   <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
    {/* title */}
    <div className="md:col-span-4">
     <Title className="text-start">I - Learner's Personal Information</Title>
    </div>

    {/* last name */}
    <div>
     <SubTitle>Last Name</SubTitle>
     <p className="font-medium">{student.last_name}</p>
    </div>

    {/* first name */}
    <div>
     <SubTitle>First Name</SubTitle>
     <p className="font-medium">{student.first_name}</p>
    </div>

    {/* middle name */}
    <div>
     <SubTitle>Middle Name</SubTitle>
     <p className="font-medium">{student.middle_name}.</p>
    </div>

    {/* extn name */}
    <div>
     <SubTitle>(Extn. Name if any)</SubTitle>
     <p className="font-medium">{student.extension_name}</p>
    </div>
   </div>

   <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
    {/* date of birth */}
    <div className="md:col-span-2">
     <SubTitle>Date of Birth(yyyy/mm/dd)</SubTitle>
     <p className="font-medium">{student.date_of_birth}</p>
    </div>

    {/* age */}
    <div className="md:col-span-2">
     <SubTitle>Age</SubTitle>
     <p className="font-medium">{student.age}</p>
    </div>

    {/* gender */}
    <div className="grid gap-2 md:col-span-2">
     <SubTitle>Gender</SubTitle>
     <SelectInput
      selectLabel={"Gender"}
      selectValue={"Gender"}
      data={gender}
      defaultValue={student.gender}
     />
    </div>

    {/* religion */}
    <div className="grid gap-2 md:col-span-2">
     <SubTitle>Religion</SubTitle>
     <SelectInput
      selectLabel={"Religion"}
      selectValue={"Religion"}
      data={religion}
      defaultValue={student.religion}
     />
    </div>

    {/* Indigenous Peoples */}
    <div className="md:col-span-4 space-y-3">
     <SubTitle>
      Belonging to any Indigenous Peoples (IP) Community / Indigenous Cultural
      Community?
     </SubTitle>

     <RadioGroup defaultValue={student.indeginous_people}>
      <div className="flex gap-3">
       <div className="flex items-center space-x-2">
        <RadioGroupItem value="no" id="no" />
        <Label htmlFor="no">No</Label>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="flex items-center gap-2 md:col-span-2 lg:col-span-1">
         <RadioGroupItem value="yes" id="yes" />
         <Label htmlFor="yes">Yes, if yes please specify: </Label>
        </div>
        <div className="md:col-span-2 lg:col-span-3">
         <Input placeholder="Type of Indigenous People" />
        </div>
       </div>
      </div>
     </RadioGroup>
    </div>

    {/* person with disability */}
    <div className="md:col-span-4 space-y-3">
     <SubTitle>Is the learner a person with disability (PWD)?</SubTitle>

     <RadioGroup defaultValue={student.person_with_disability}>
      <div className="flex gap-3 md:flex-row flex-col">
       <div className="flex items-center space-x-2">
        <RadioGroupItem value="no" id="no" />
        <Label htmlFor="no">No</Label>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="flex items-center gap-2 md:col-span-2 lg:col-span-1">
         <RadioGroupItem value="yes" id="yes" />
         <Label htmlFor="yes">Yes, if yes please specify: </Label>
        </div>
        <div className="md:col-span-2 lg:col-span-3">
         <Input placeholder="Type of Indigenous People" />
        </div>
       </div>
      </div>
     </RadioGroup>
    </div>

    {/* nationality */}
    <div className="md:col-span-4 lg:col-span-1">
     <SubTitle>Nationality</SubTitle>
     <p className="font-medium">{student.nationality}</p>
    </div>

    {/* place of birth */}
    <div className="md:col-span-2 space-y-2">
     <TextInput
      labelTitle="Place of Birth"
      className="space-y-2"
      defaultValue={student.place_of_birth}
     />
    </div>

    {/* mobile number */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Mobile Number"
      className="space-y-2"
      defaultValue={student.phone_number}
     />
    </div>
   </div>
  </section>
 );
}
