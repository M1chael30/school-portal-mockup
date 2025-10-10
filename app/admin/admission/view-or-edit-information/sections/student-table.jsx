import { Button } from "@/components/ui/button";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function StudentTable({ columnHead = [], data = [] }) {
 return (
  <div className="overflow-hidden rounded-md border">
   <Table>
    <TableHeader>
     <TableRow>
      {columnHead.map((colHead) => (
       <TableHead key={colHead}>{colHead}</TableHead>
      ))}
     </TableRow>
    </TableHeader>
    <TableBody>
     {data.map((item) => (
      <TableRow key={item.student_lrn}>
       <TableCell>{item.student_lrn}</TableCell>
       <TableCell>
        {`${item.last_name}, ${item.first_name} ${item.middle_name[0]}.`}
       </TableCell>
       <TableCell>{item.grade_level}</TableCell>
       <TableCell>{item.class_section}</TableCell>
       <TableCell>
        <Button asChild variant="link" size="sm">
         <Link
          href={`/admin/admission/view-or-edit-information/${item.student_lrn}`}
         >
          View
         </Link>
        </Button>
       </TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </div>
 );
}
