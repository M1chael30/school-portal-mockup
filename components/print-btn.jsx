"use client";

import { Button } from "./ui/button";
import { Printer } from "lucide-react";

export default function PrintBtn({ print }) {
 return (
  <div className="flex justify-end">
   <Button size="sm" onClick={print} className="print:hidden">
    <Printer />
    Print
   </Button>
  </div>
 );
}
