import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function TextInput({ labelTitle, ...props }) {
 return (
  <div className="space-y-4">
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
