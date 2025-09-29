import React from "react";
import PersonalDetails from "./sections/personal-details";
import StudentDetails from "./sections/student-details";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Title from "@/components/title";

const personalInfomationTabList = [
 {
  tabName: "View Personal Information",
  value: "viewPersonalInformation",
 },
 {
  tabName: "Edit Personal Information",
  value: "editPersonalInformation",
 },
 {
  tabName: "Upload Picture",
  value: "uploadPicture",
 },
 {
  tabName: "Print Personal Information",
  value: "printPersonalInformation",
 },
];

const personalInfomationTabContent = [
 {
  component: PersonalDetails,
  value: "viewPersonalInformation",
 },
 // {
 //  tabName: "Edit Personal Information",
 //  value: "editPersonalInformation",
 // },
 // {
 //  tabName: "Upload Picture",
 //  value: "uploadPicture",
 // },
 // {
 //  tabName: "Print Personal Information",
 //  value: "printPersonalInformation",
 // },
];

export default function ProfileIndex() {
 return (
  <section className={"space-y-5"}>
   <Title> General Student Personal Information Sheet (GSPIS) </Title>
   <Tabs defaultValue="viewPersonalInformation" className={"space-y-5"}>
    <TabsList>
     {personalInfomationTabList.map((item, i) => (
      <TabsTrigger key={i} value={item.value}>
       {item.tabName}
      </TabsTrigger>
     ))}
    </TabsList>
    {personalInfomationTabContent.map((item, i) => (
     <TabsContent key={i} value={item.value}>
      <item.component />
     </TabsContent>
    ))}
   </Tabs>
  </section>
 );
}
