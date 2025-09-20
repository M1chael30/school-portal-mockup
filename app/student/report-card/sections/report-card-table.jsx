import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function ReportCardTable({ column, data }) {
 return (
  <Table>
   <TableHeader>
    <TableRow>
     {column.length &&
      column.map((colHead, index) => (
       <TableHead key={index}>{colHead}</TableHead>
      ))}
    </TableRow>
   </TableHeader>
   <TableBody>
    {data.length ? (
     data.map((item) =>
      item.studentGrade.map((item, index) => (
       <TableRow key={index}>
        <TableCell>{item.subject}</TableCell>
        {item.grades &&
         item.grades.map((grade, index) => (
          <TableCell key={index}>{grade}</TableCell>
         ))}
        <TableCell>{item.finalAverage}</TableCell>
        <TableCell>{item.teacher}</TableCell>
        <TableCell
         className={cn(
          "font-bold",
          item.finalAverage >= 75 && "text-green-500 dark:text-green-600",
          item.finalAverage < 75 && "text-red-500 dark:text-red-600"
         )}
        >
         {item.remarks}
        </TableCell>
       </TableRow>
      ))
     )
    ) : (
     <TableRow>
      <TableCell colSpan={column.length} className="text-center h-26">
       Filter school year to show grades.
      </TableCell>
     </TableRow>
    )}
   </TableBody>
  </Table>
 );
}
