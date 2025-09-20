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
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare, Download } from "lucide-react";

const documents = [
 {
  id: 1,
  document_name: "Certificate of Enrollment",
  description: "Official certificate template for student enrollment.",
  file_type: "PDF",
 },
 {
  id: 2,
  document_name: "Grading Sheet",
  description: "Template for recording and submitting student grades.",
  file_type: "Excel",
 },
 {
  id: 5,
  document_name: "Clearance Form",
  description: "Form used at the end of the school year for clearance.",
  file_type: "PDF",
 },
];

const columnHead = ["Document Name", "Description", "File Type", "Action"];

export default function DocumentsIndex() {
 return (
  <section className="space-y-6">
   <div className="">
    <Title className="text-start">Documents</Title>
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
      {documents.length ? (
       documents.map((document) => (
        <TableRow key={document.id}>
         <TableCell>{document.document_name}</TableCell>
         <TableCell>{document.description}</TableCell>
         <TableCell>{document.file_type}</TableCell>
         <TableCell className="space-x-4">
          <Button variant="outline" size="sm">
           <Download />
          </Button>
          <Button variant="outline" size="sm">
           <ArrowUpRightFromSquare />
          </Button>
         </TableCell>
        </TableRow>
       ))
      ) : (
       <TableRow>
        <TableCell colSpan={columnHead.length}>
         No documents to display.
        </TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
  </section>
 );
}
