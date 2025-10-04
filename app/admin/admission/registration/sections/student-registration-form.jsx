import PopoverCalendar from "@/components/popover-calendar";
import { SelectInput } from "@/components/select-input";
import TextInput from "@/components/text-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Minus } from "lucide-react";
import React from "react";

export default function StudentRegistrationForm({
 studentStatus,
 gradeLevel,
 gender,
}) {
 return (
  <div className="space-y-6">
   {/* header */}
   <div className="grid auto-rows-min md:grid-cols-4 gap-5">
    {/* left side*/}
    <div className="space-y-3">
     <Label className="text-sm">Student Status:</Label>

     <SelectInput
      selectValue="Select Student Status"
      selectLabel="Student Status"
      data={studentStatus}
     />
    </div>

    {/* right side*/}
    <div className="space-y-3">
     <Label className="text-sm">Student LRN:</Label>
     <Input placeholder="Student LRN" />
    </div>
   </div>

   {/* under header */}
   <div className="grid auto-rows-min md:grid-cols-4 gap-5">
    {/* grade level */}
    <div className="space-y-3 md:col-span-4">
     <Label className="text-sm">Grade Level</Label>

     <SelectInput
      selectLabel="Grade Level"
      selectValue="Select a Grade Level"
      data={gradeLevel}
     />
    </div>

    {/* school year */}
    <div className="md:col-span-2">
     <div className="space-y-3">
      <Label className="text-sm">School Year</Label>
      <div className="flex items-center gap-4">
       <Input placeholder="Start Year" />
       <Minus />
       <Input placeholder="End Year" />
      </div>
     </div>
    </div>
   </div>

   <hr />

   {/* gender and birthdate */}
   <div className="grid auto-rows-min md:grid-cols-4 gap-5">
    {/* left side */}
    <div className="space-x-3 flex items-center md:col-span-2">
     <Label className="text-sm">Gender</Label>
     <SelectInput
      selectValue="Select a Gender"
      selectLabel="Gender"
      data={gender}
     />
    </div>

    {/* TODO:previous school */}

    {/* right side */}
    <PopoverCalendar className="space-x-3 flex items-center md:col-span-2" />
   </div>

   {/* student name */}
   <div className="grid auto-rows-min md:grid-cols-4 gap-5">
    <TextInput labelTitle="Last Name" className="space-y-3" />

    <TextInput labelTitle="First Name" className="space-y-3" />

    <TextInput labelTitle="Middle Initial" className="space-y-3" />
   </div>

   {/* button */}
   <Button size="sm">Register</Button>
  </div>
 );
}
