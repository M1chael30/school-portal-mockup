"use client";

import TextInput from "@/components/text-input";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";

const starDate = new Date("2025-09-21");
const today = new Date();

const endDate = new Date(starDate);
endDate.setDate(starDate.getDate() + 9);

const isVisible = today >= starDate && today <= endDate;
console.log(isVisible);

export default function StudentGrades({ student }) {
 const [isEdit, setIsEdit] = useState({
  quarter_1: true,
  quarter_2: true,
  quarter_3: true,
  quarter_4: true,
 });

 const isEditing = (key, value) => {
  setIsEdit((prev) => ({ ...prev, [key]: value }));
 };

 return (
  <Card className={"border-0"}>
   <CardHeader>
    <CardTitle className={"font-medium tracking-wider"}>
     Academic Performance
    </CardTitle>
    <CardDescription>Quarterly grades and overall performance</CardDescription>
   </CardHeader>
   <CardContent className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
     {/* quarter 1 */}
     <div className={cn(isVisible && "flex gap-2")}>
      <TextInput
       labelTitle={"Quarter 1"}
       defaultValue={student.quarter_1}
       disabled={isEdit.quarter_1}
      />

      {isVisible && (
       <div className="flex items-end">
        <Button
         variant={"outline"}
         className={"h-9"}
         onClick={() => isEditing("quarter_1", !isEdit.quarter_1)}
        >
         {isEdit.quarter_1 ? "Edit" : "Save"}
        </Button>
       </div>
      )}
     </div>

     {/* quarter 2 */}
     <div className={"flex gap-2"}>
      <TextInput
       labelTitle={"Quarter 2"}
       defaultValue={student.quarter_2}
       disabled={isEdit.quarter_2}
      />

      <div className="flex items-end">
       <Button
        variant={"outline"}
        className={"h-9"}
        onClick={() => isEditing("quarter_2", !isEdit.quarter_2)}
       >
        {isEdit.quarter_2 ? "Edit" : "Save"}
       </Button>
      </div>
     </div>

     {/* quarter 3 */}
     <div className="flex gap-2">
      <TextInput
       labelTitle={"Quarter 3"}
       defaultValue={student.quarter_3}
       disabled={isEdit.quarter_3}
      />

      <div className="flex items-end">
       <Button
        variant={"outline"}
        className={"h-9"}
        onClick={() => isEditing("quarter_3", !isEdit.quarter_3)}
       >
        {isEdit.quarter_3 ? "Edit" : "Save"}
       </Button>
      </div>
     </div>

     {/* quarter 4 */}
     <div className="flex gap-2">
      <TextInput
       labelTitle={"Quarter 4"}
       defaultValue={student.quarter_4}
       disabled={isEdit.quarter_4}
      />

      <div className="flex items-end">
       <Button
        variant={"outline"}
        className={"h-9"}
        onClick={() => isEditing("quarter_4", !isEdit.quarter_4)}
       >
        {isEdit.quarter_4 ? "Edit" : "Save"}
       </Button>
      </div>
     </div>

     {/* average */}
     <div className="space-y-2">
      <Label>Average</Label>
      <Title className={"text-md text-start"}>{student.average}</Title>
     </div>

     {/* remarks */}
     <div className="space-y-2">
      <Label>Remarks</Label>
      <Title
       className={cn(
        "text-md text-start flex items-center gap-1.5",
        student.remarks === "Passed" && "text-green-500 dark:text-green-600",
        student.remarks === "Failed" && "text-red-500 dark:text-red-600"
       )}
      >
       {student.remarks}
       <Check className="size-5" />
      </Title>
     </div>
    </div>
   </CardContent>
  </Card>
 );
}
