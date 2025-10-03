import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function TextInput({ labelTitle, className, ...props }) {
 return (
  <div className={cn("space-y-4", className)}>
   {labelTitle && (
    <Label {...props} htmlFor={labelTitle}>
     {labelTitle}
    </Label>
   )}
   <Input
    {...props}
    autoComplete="off"
    id={labelTitle}
    placeholder={labelTitle}
   />
  </div>
 );
}
