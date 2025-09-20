import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Title from "@/components/title";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function StudentBasicInfo({ student }) {
 return (
  <Card className={"border-0"}>
   <CardHeader>
    <div className="flex items-center gap-2">
     <div className="">
      <Avatar className={"size-10"}>
       <AvatarFallback>{student.student_name[0].toUpperCase()}</AvatarFallback>
      </Avatar>
     </div>
     <div className="">
      <CardTitle className={"font-medium tracking-wider"}>
       Student Information
      </CardTitle>
      <CardDescription>
       Basic student details and identification
      </CardDescription>
     </div>
    </div>
   </CardHeader>
   <CardContent className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
     {/* student lrn */}
     <div className="space-y-2">
      <Label htmlFor="lrn" className="text-sm font-medium">
       Student LRN
      </Label>

      <Title className={"text-md text-start"}>{student.student_lrn}</Title>
     </div>

     {/* student name */}
     <div className="space-y-2">
      <Label htmlFor="name" className="text-sm font-medium">
       Student Name
      </Label>
      <Title className={"text-md text-start"}>{student.student_name}</Title>
     </div>

     {/* student grade and section */}
     <div className="space-y-2">
      <Label htmlFor="name" className="text-sm font-medium">
       Grade and Section
      </Label>
      <Title className={"text-md text-start"}>{student.section}</Title>
     </div>

     {/* subject */}
     <div className="space-y-2">
      <Label htmlFor="name" className="text-sm font-medium">
       Subject
      </Label>
      <Title className={"text-md text-start"}>{student.subject}</Title>
     </div>
    </div>
   </CardContent>
  </Card>
 );
}
