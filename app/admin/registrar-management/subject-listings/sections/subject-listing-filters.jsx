import { SelectInput } from "@/components/select-input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function SubjectListingFilters({ gradeLevel = [], setFilter }) {
 return (
  <div className="space-y-3">
   {/* grade level filter */}
   <div className="space-y-3">
    <Label>Grade Level</Label>
    <SelectInput
     onValueChange={(val) => setFilter(val)}
     selectValue="Select a Grade Level"
     selectLabel="Grade Level"
     data={gradeLevel}
    />
   </div>
  </div>
 );
}
