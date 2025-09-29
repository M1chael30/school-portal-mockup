import Title from "@/components/title";
import {
 columnHeadOne,
 columnHeadTwo,
 scheduleTableOne,
 scheduleTableTwo,
} from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ScheduleTableOne from "./sections/schedule-table-one";
import ScheduleTableTwo from "./sections/schedule-table-two";

export default function ScheduleIndex() {
 return (
  <section className="space-y-6">
   <div className="">
    <Title className="text-start">Student Schedule / SY 2025-2026</Title>
   </div>

   {/* schedule */}
   <Tabs defaultValue="tableOne" className="space-y-4">
    <TabsList>
     <TabsTrigger value="tableOne">Table One</TabsTrigger>
     <TabsTrigger value="tableTwo">Table Two</TabsTrigger>
    </TabsList>
    <TabsContent value="tableOne">
     <ScheduleTableTwo columnHead={columnHeadTwo} schedule={scheduleTableTwo} />
    </TabsContent>
    <TabsContent value="tableTwo">
     <ScheduleTableOne columnHead={columnHeadOne} schedule={scheduleTableOne} />
    </TabsContent>
   </Tabs>
  </section>
 );
}
