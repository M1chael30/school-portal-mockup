import { cn } from "@/lib/utils";
import React from "react";

export default function Title({ className, children, ...props }) {
 return (
  <h1 {...props} className={cn("text-xl text-center font-medium print:text-xl print:font-medium", className)}>
   {children}
  </h1>
 );
}
