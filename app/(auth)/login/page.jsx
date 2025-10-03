import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginCard from "./sections/login-card";

const loginContent = [
 {
  value: "admin",
  title: "Admin",
  description: "Login as Administrator",
  labelTitleOne: "Employee ID",
  labelTitleTwo: "Password",
  link: "/admin",
 },
 {
  value: "teacher",
  title: "Teacher",
  description: "Login as Teacher",
  labelTitleOne: "Employee ID",
  labelTitleTwo: "Password",
  link: "/teacher",
 },
 {
  value: "student",
  title: "Student",
  description: "Login as Student",
  labelTitleOne: "Student LRN",
  labelTitleTwo: "Password",
  link: "/student",
 },
];

export default function LoginIndex() {
 return (
  <Tabs defaultValue="admin">
   <TabsList>
    {loginContent &&
     loginContent.map((content, index) => (
      <TabsTrigger key={index} value={content.value}>
       {content.title}
      </TabsTrigger>
     ))}
   </TabsList>
   {loginContent &&
    loginContent.map((content, index) => (
     <TabsContent key={index} value={content.value}>
      <LoginCard data={content} />
     </TabsContent>
    ))}
  </Tabs>
 );
}
