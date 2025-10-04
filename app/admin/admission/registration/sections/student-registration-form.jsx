import { SelectInput } from "@/components/select-input";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";

export default function StudentRegistrationForm({ studentStatus, gradeLevel }) {
 return (
  <div className="space-y-6">
   {/* header */}
   <div className="grid auto-rows-min md:grid-cols-2 gap-3">
    {/* left side*/}
    <div className="space-y-3">
     <Label>Student Status:</Label>

     <SelectInput
      selectValue="Select Student Status"
      selectLabel="Student Status"
      data={studentStatus}
     />
    </div>

    {/* right side*/}
    <div className="space-y-3">
     <Label>Student LRN:</Label>
     <Input placeholder="Student LRN" className="w-full md:w-10/12" />
    </div>
   </div>

   {/* under header */}
   <div className="grid auto-rows-min md:grid-cols-5 gap-5">
    {/* grade level */}
    <div className="space-y-3 md:col-span-5">
     <Label>Grade Level</Label>

     <SelectInput
      selectLabel="Grade Level"
      selectValue="Select a Grade Level"
      data={gradeLevel}
     />
    </div>

    {/* school year */}
    <div className="md:col-span-3">
     <div className="flex items-center gap-3">
      <Label>School Year</Label>
      <div className="flex items-center gap-4">
       <Input />
       -
       <Input />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
