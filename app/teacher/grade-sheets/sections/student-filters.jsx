import { SelectInput } from "@/components/select-input";
import { Label } from "@/components/ui/label";
import { Minus } from "lucide-react";
import TextInput from "@/components/text-input";

export default function StudentFilters({
 updateFilter,
 subjects,
 quarters,
 schoolYear,
}) {
 return (
  <>
   {/* Filters */}
   <section className="flex gap-4">
    {/* subject */}
    <div className="space-y-3">
     <Label>Subject</Label>
     <SelectInput
      onValueChange={(val) => updateFilter("subject", val)}
      data={subjects}
      selectLabel="Subject"
      selectValue="Select a Subject"
     />
    </div>

    {/* quarter */}
    <div className="space-y-3">
     <Label>Grades for</Label>
     <SelectInput
      onValueChange={(val) => updateFilter("quarter", val)}
      data={quarters}
      selectLabel="Quarter"
      selectValue="Select a Quarter"
     />
    </div>

    {/* sy */}
    <div className="space-y-3">
     <Label>School Year</Label>
     <SelectInput
      defaultValue={schoolYear[3]}
      data={schoolYear}
      selectValue="Select a School Year"
      selectLabel="School Year"
     />
    </div>
   </section>
  </>
 );
}
