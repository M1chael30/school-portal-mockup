import { SelectInput } from "@/components/select-input";
import { Label } from "@/components/ui/label";
import { Minus } from "lucide-react";
import TextInput from "@/components/text-input";

export default function ClassListFilters({
 updateFilter,
 subjects,
 schoolYear,
}) {
 return (
  <>
   {/* Filters */}
   <section className="flex gap-4 print:hidden">
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
