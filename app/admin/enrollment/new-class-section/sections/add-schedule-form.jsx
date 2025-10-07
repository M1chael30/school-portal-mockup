import { SelectInput } from "@/components/select-input";
import TextInput from "@/components/text-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";

export default function AddSchoolForm({ schoolType }) {
 return (
  <div className="space-y-5 md:w-1/2">
   <TextInput labelTitle="School Code" />

   <TextInput labelTitle="School Name" />

   <div className="space-y-4">
    <Label>School Type</Label>
    <SelectInput
     selectLabel="School Type"
     selectValue="Select a School Type"
     data={schoolType}
    />

    <TextInput labelTitle="School Address" />

    <Button size="sm">Add</Button>
   </div>
  </div>
 );
}
