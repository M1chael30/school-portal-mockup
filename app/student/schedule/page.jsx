import SubTitle from "@/components/sub-title";
import Title from "@/components/title";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";

const schedules = [
 {
  time: "7:30 - 8:30 AM",
  monday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
  tuesday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
  wednesday: { subject: "Science", adviser: "Mr. Santos", room: "Room 103" },
  thursday: { subject: "Filipino", adviser: "Mr. Santos", room: "Room 106" },
  friday: { subject: "MAPEH", adviser: "Mr. Tejano", room: "Room 105" },
 },
 {
  time: "8:30 - 9:30 AM",
  monday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
  tuesday: { subject: "Science", adviser: "Mr. Santos", room: "Room 103" },
  wednesday: { subject: "Filipino", adviser: "Mr. Santos", room: "Room 106" },
  thursday: { subject: "MAPEH", adviser: "Mr. Bayudang", room: "Room 105" },
  friday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
 },
 {
  time: "9:30 - 10:00 AM",
  monday: { subject: "Recess", adviser: "", room: "" },
  tuesday: { subject: "Recess", adviser: "", room: "" },
  wednesday: { subject: "Recess", adviser: "", room: "" },
  thursday: { subject: "Recess", adviser: "", room: "" },
  friday: { subject: "Recess", adviser: "", room: "" },
 },
 {
  time: "10:00 - 11:00 AM",
  monday: { subject: "Science", adviser: "Mr. Santos", room: "Room 103" },
  tuesday: { subject: "ESP", adviser: "Mr. Seeping", room: "Room 104" },
  wednesday: { subject: "MAPEH", adviser: "Mr. Tejano", room: "Room 105" },
  thursday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
  friday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
 },
 {
  time: "11:00 - 12:00 NN",
  monday: { subject: "ESP", adviser: "Mr. Seeping", room: "Room 104" },
  tuesday: { subject: "MAPEH", adviser: "Mr. Bayudang", room: "Room 105" },
  wednesday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
  thursday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
  friday: { subject: "Filipino", adviser: "Mr. Santos", room: "Room 106" },
 },
 {
  time: "12:00 - 1:00 PM",
  monday: { subject: "Lunch", adviser: "", room: "" },
  tuesday: { subject: "Lunch", adviser: "", room: "" },
  wednesday: { subject: "Lunch", adviser: "", room: "" },
  thursday: { subject: "Lunch", adviser: "", room: "" },
  friday: { subject: "Lunch", adviser: "", room: "" },
 },
 {
  time: "1:00 - 2:00 PM",
  monday: { subject: "MAPEH", adviser: "Mr. Tejano", room: "Room 105" },
  tuesday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
  wednesday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
  thursday: { subject: "Science", adviser: "Mr. Santos", room: "Room 103" },
  friday: { subject: "ESP", adviser: "Mr. Seeping", room: "Room 104" },
 },
];

const columnHead = [
 "Time",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
];

export default function ScheduleIndex() {
 return (
  <section className="space-y-6">
   <div className="">
    <Title className="text-start">Student Schedule</Title>
    <SubTitle>Grade 10 - Luna</SubTitle>
   </div>
   <div className="overflow-hidden rounded-md border">
    <Table>
     <TableHeader>
      <TableRow>
       {columnHead.length &&
        columnHead.map((colHead, index) => (
         <TableHead key={index}>{colHead}</TableHead>
        ))}
      </TableRow>
     </TableHeader>
     <TableBody>
      {schedules.length ? (
       schedules.map((sched, index) => (
        <TableRow key={index} className={"h-24"}>
         <TableCell>{sched.time}</TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.monday.subject}</span>
           <span>{sched.monday.adviser}</span>
           <span>{sched.monday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.tuesday.subject}</span>
           <span>{sched.tuesday.adviser}</span>
           <span>{sched.tuesday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.wednesday.subject}</span>
           <span>{sched.wednesday.adviser}</span>
           <span>{sched.wednesday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.thursday.subject}</span>
           <span>{sched.thursday.adviser}</span>
           <span>{sched.thursday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.friday.subject}</span>
           <span>{sched.friday.adviser}</span>
           <span>{sched.friday.room}</span>
          </div>
         </TableCell>
        </TableRow>
       ))
      ) : (
       <TableRow colSpan={columnHead.length}>
        <TableCell className="text-center">No schedule displayed.</TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
  </section>
 );
}
