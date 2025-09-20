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

const columnHead = ["Time", "Day", "Subject", "Room"];

const schedule = [
 {
  time: "7:30 - 8:30 AM",
  day: "Wednesday",
  subject: "Science",
  room: "Room 103",
 },
 {
  time: "7:30 - 8:30 AM",
  day: "Thursday",
  subject: "Filipino",
  room: "Room 106",
 },
 {
  time: "8:30 - 9:30 AM",
  day: "Tuesday",
  subject: "Science",
  room: "Room 103",
 },
 {
  time: "8:30 - 9:30 AM",
  day: "Wednesday",
  subject: "Filipino",
  room: "Room 106",
 },
 {
  time: "9:30 - 10:00 AM",
  day: "M, T, W, Th, F",
  subject: "Break Time (Recess)",
  room: "",
 },
 {
  time: "10:00 - 11:00 AM",
  day: "Monday",
  subject: "Science",
  room: "Room 103",
 },
 {
  time: "11:00 - 12:00 NN",
  day: "Friday",
  subject: "Filipino",
  room: "Room 106",
 },
 {
  time: "12:00 - 1:00 PM",
  day: "M, T, W, Th, F",
  subject: "Lunch",
  room: "",
 },
 {
  time: "1:00 - 2:00 PM",
  day: "Thursday",
  subject: "Science",
  room: "Room 103",
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
        <TableRow key={index}>
         <TableCell>{sched.time}</TableCell>
         <TableCell>{sched.day}</TableCell>
         <TableCell>{sched.subject}</TableCell>
         <TableCell>{sched.room}</TableCell>
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
