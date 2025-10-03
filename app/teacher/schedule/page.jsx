import Title from "@/components/title";
import React from "react";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";

const columnHead = [
 "Time",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
];

const schedule = [
 {
  time: "7:30 - 8:30 AM",
  monday: { subject: "", room: "" },
  tuesday: { subject: "", room: "" },
  wednesday: { subject: "Science", room: "Room 103" },
  thursday: { subject: "", room: "" },
  friday: { subject: "", room: "" },
 },
 {
  time: "7:30 - 8:30 AM",
  monday: { subject: "", room: "" },
  tuesday: { subject: "", room: "" },
  wednesday: { subject: "", room: "" },
  thursday: { subject: "Filipino", room: "Room 106" },
  friday: { subject: "", room: "" },
 },
 {
  time: "8:30 - 9:30 AM",
  monday: { subject: "", room: "" },
  tuesday: { subject: "Science", room: "Room 103" },
  wednesday: { subject: "", room: "" },
  thursday: { subject: "", room: "" },
  friday: { subject: "", room: "" },
 },
 {
  time: "8:30 - 9:30 AM",
  monday: { subject: "", room: "" },
  tuesday: { subject: "", room: "" },
  wednesday: { subject: "Filipino", room: "Room 106" },
  thursday: { subject: "", room: "" },
  friday: { subject: "", room: "" },
 },
 {
  time: "9:30 - 10:00 AM",
  monday: { subject: "Break Time (Recess)", room: "" },
  tuesday: { subject: "Break Time (Recess)", room: "" },
  wednesday: { subject: "Break Time (Recess)", room: "" },
  thursday: { subject: "Break Time (Recess)", room: "" },
  friday: { subject: "Break Time (Recess)", room: "" },
 },
 {
  time: "10:00 - 11:00 AM",
  monday: { subject: "Science", room: "Room 103" },
  tuesday: { subject: "", room: "" },
  wednesday: { subject: "", room: "" },
  thursday: { subject: "", room: "" },
  friday: { subject: "", room: "" },
 },
 {
  time: "11:00 - 12:00 NN",
  monday: { subject: "", room: "" },
  tuesday: { subject: "", room: "" },
  wednesday: { subject: "", room: "" },
  thursday: { subject: "", room: "" },
  friday: { subject: "Filipino", room: "Room 106" },
 },
 {
  time: "12:00 - 1:00 PM",
  monday: { subject: "Lunch", room: "" },
  tuesday: { subject: "Lunch", room: "" },
  wednesday: { subject: "Lunch", room: "" },
  thursday: { subject: "Lunch", room: "" },
  friday: { subject: "Lunch", room: "" },
 },
 {
  time: "1:00 - 2:00 PM",
  monday: { subject: "", room: "" },
  tuesday: { subject: "", room: "" },
  wednesday: { subject: "", room: "" },
  thursday: { subject: "Science", room: "Room 103" },
  friday: { subject: "", room: "" },
 },
];

export default function ScheduleIndex() {
 return (
  <section className="space-y-6">
   <div className="">
    <Title className="font-medium text-start">Teacher Schedule</Title>
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
      {schedule.length ? (
       schedule.map((sched, index) => (
        <TableRow key={index} className={"h-24"}>
         <TableCell>{sched.time}</TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.monday.subject}</span>
           <span>{sched.monday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.tuesday.subject}</span>
           <span>{sched.tuesday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.wednesday.subject}</span>
           <span>{sched.wednesday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.thursday.subject}</span>
           <span>{sched.thursday.room}</span>
          </div>
         </TableCell>
         <TableCell>
          <div className="flex flex-col">
           <span>{sched.friday.subject}</span>
           <span>{sched.friday.room}</span>
          </div>
         </TableCell>
        </TableRow>
       ))
      ) : (
       <TableRow>
        <TableCell colSpan={columnHead.length}>
         No schedule to display.
        </TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
  </section>
 );
}
