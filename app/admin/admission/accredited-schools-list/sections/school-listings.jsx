import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";

export default function SchoolListings({
 columnHead = [],
 existingSchools = [],
}) {
 return (
  <div className="overflow-hidden rounded-md border">
   <Table>
    <TableHeader>
     <TableRow>
      {columnHead &&
       columnHead.map((colHead, index) => (
        <TableHead key={index} className="w-[100px]">
         {colHead}
        </TableHead>
       ))}
     </TableRow>
    </TableHeader>
    <TableBody>
     {existingSchools &&
      existingSchools.map((school, index) => (
       <TableRow key={index}>
        <TableCell>{school.SchoolCode}</TableCell>
        <TableCell>{school.SchoolName}</TableCell>
        <TableCell>{school.SchoolType}</TableCell>
        <TableCell>{school.SchoolAddress}</TableCell>
       </TableRow>
      ))}
    </TableBody>
   </Table>
  </div>
 );
}
