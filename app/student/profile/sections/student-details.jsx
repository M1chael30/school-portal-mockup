import Title from "@/components/title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { studentNavmenu } from "@/lib/data";
import SubTitle from "@/components/sub-title";

export default function StudentDetails() {
 return (
  <section className="space-y-5">
   <Card>
    <CardHeader>
     <CardTitle>
      <Title className="text-start font-medium">Student Details</Title>
     </CardTitle>
    </CardHeader>
    <CardContent>
     <div className="flex flex-row gap-8">
      {/* name */}
      <div className="">
       <SubTitle>Grade Level</SubTitle>
       <p className="font-medium">10</p>
      </div>
      {/* gender */}
      <div className="">
       <SubTitle>Section</SubTitle>
       <p className="font-medium">Luna</p>
      </div>
      {/* contact */}
      <div className="">
       <SubTitle>Student LRN</SubTitle>
       <p className="font-medium">{studentNavmenu.user.studentId}</p>
      </div>
      {/* address */}
      <div className="">
       <SubTitle>Adviser</SubTitle>
       <p className="font-medium">Mr. Tejano, Michael Jay Angelo G.</p>
      </div>
     </div>
    </CardContent>
   </Card>
  </section>
 );
}
