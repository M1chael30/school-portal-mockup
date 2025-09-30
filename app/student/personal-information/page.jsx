import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ViewPersonalInformation from "./view-personal-information";

const personalInfomationTabList = [
    {
        tabName: "View Personal Information",
        value: "viewPersonalInformation",
    },
    {
        tabName: "Print Personal Information",
        value: "printPersonalInformation",
    },
    {
        tabName: "Edit Personal Information",
        value: "editPersonalInformation",
    },
    {
        tabName: "Upload Picture",
        value: "uploadPicture",
    },
];

const personalInfomationTabContent = [
    {
        component: ViewPersonalInformation,
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
            <Tabs defaultValue="viewPersonalInformation" className={"space-y-5"}>
                <TabsList className={'h-fit'}>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {personalInfomationTabList.map((item, i) => (
                            <TabsTrigger key={i} value={item.value}>
                                <span className="truncate">{item.tabName}</span>
                            </TabsTrigger>
                        ))}
                    </div>
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
