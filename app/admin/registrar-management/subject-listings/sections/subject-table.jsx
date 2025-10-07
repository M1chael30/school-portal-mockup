import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";

export default function SubjectTable({
 columnHead = [],
 subjects = [],
 filter,
}) {
 return (
  <>
   <div className="text-center">
    <p>Curriculum Created for Grade {filter}</p>
   </div>
   <div className="overflow-hidden rounded-md border">
    <Table>
     <TableHeader>
      <TableRow>
       {columnHead &&
        columnHead.map((colHead, index) => (
         <TableHead key={index}>{colHead}</TableHead>
        ))}
      </TableRow>
     </TableHeader>
     <TableBody>
      {subjects &&
       subjects.map((subject) =>
        subject.subjects.map((subject, index) => (
         <TableRow key={index}>
          <TableCell>{subject.subjectCode}</TableCell>
          <TableCell>{subject.subjectName}</TableCell>
          <TableCell>{subject.subjectDescription}</TableCell>
         </TableRow>
        ))
       )}
     </TableBody>
    </Table>
   </div>
  </>
 );
}
