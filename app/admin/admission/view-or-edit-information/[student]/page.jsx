import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { studentsInfo } from "@/lib/data";
import EditStudentInfo from "./sections/edit-student-info";
import ViewStudentInfo from "./sections/view-student-info";

export default async function StudentInformation({ params }) {
 const { student } = await params;

 const studentInfo = studentsInfo.find((s) => s.student_lrn === student);

 return (
  <>
   <Tabs defaultValue="edit-information">
    <TabsList>
     <TabsTrigger value="edit-information">Edit Information</TabsTrigger>
     <TabsTrigger value="view-information">View Information</TabsTrigger>
    </TabsList>
    <TabsContent value="edit-information">
     <EditStudentInfo student={studentInfo} />
    </TabsContent>
    <TabsContent value="view-information">
     <ViewStudentInfo student={studentInfo} />
    </TabsContent>
   </Tabs>
  </>
 );
}
