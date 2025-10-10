import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function StudentFilters({ filters }) {
 return (
  <div className="flex justify-center">
   <div className="grid auto-rows-min grid-cols-1 md:grid-cols-4 gap-3">
    <Label htmlFor="studentLRN" className="md:col-span-1">
     Student LRN:
    </Label>
    <Input
     placeholder="Student LRN"
     id="studentLRN"
     className="md:col-span-3"
     onChange={(e) => filters("searchTerm", e.target.value)}
    />
   </div>
  </div>
 );
}
