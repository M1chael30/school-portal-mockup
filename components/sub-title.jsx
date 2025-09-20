import { cn } from "@/lib/utils";
import React from "react";

export default function SubTitle({ className, children, ...props }) {
 return (
  <p {...props} className={cn("text-sm text-muted-foreground", className)}>
   {children}
  </p>
 );
}
