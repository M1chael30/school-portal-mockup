"use client";

import { SelectInput } from "@/components/select-input";
import { Input } from "@/components/ui/input";

export default function StudentFilters({
 updateFilter,
 subjects,
 gradeAndSection,
}) {
 return (
  <>
   {/* Filters */}
   <div className="flex flex-col items-end gap-3">
    <div className="flex items-center gap-4">
     <SelectInput
      onValueChange={(val) => updateFilter("gradeAndSection", val)}
      data={gradeAndSection}
      selectLabel="Grade and section"
      selectValue="Filter by grade and section"
     />
     <SelectInput
      onValueChange={(val) => updateFilter("subject", val)}
      data={subjects}
      selectLabel="Subject"
      selectValue="Filter By Subject"
     />
    </div>
    <Input
     placeholder="Search by name"
     onChange={(e) => updateFilter("searchTerm", e.target.value)}
    />
   </div>
  </>
 );
}
