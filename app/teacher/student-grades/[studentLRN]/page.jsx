import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Title from "@/components/title";
import Link from "next/link";
import StudentBasicInfo from "./sections/student-basic-info";
import StudentGrades from "./sections/student-grades";
import { studentList } from "@/lib/data";

export default async function StudentPage({ params }) {
 const { studentLRN } = await params;

 const student = studentList.students.find(
  (std) => std.student_lrn === studentLRN
 );

 return (
  <div className="space-y-6">
   {/* header title */}
   <div className="flex justify-between items-center">
    <div>
     <Title className="text-start">Student Details</Title>
     <p className="text-muted-foreground">Edit student grades</p>
    </div>
    <div>
     <Button variant={"outline"} asChild>
      <Link href={"/teacher/student-grades"}>
       <ChevronLeft />
       Back
      </Link>
     </Button>
    </div>
   </div>

   {/* student basic info */}
   <StudentBasicInfo student={student} />

   {/* student grades */}
   <StudentGrades student={student} />
  </div>
 );
}
