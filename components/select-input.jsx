import {
 Select,
 SelectContent,
 SelectGroup,
 SelectItem,
 SelectLabel,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";

export function SelectInput({ selectLabel, selectValue, data, ...props }) {
 return (
  <Select {...props}>
   <SelectTrigger className="w-[200px]">
    <SelectValue placeholder={selectValue} />
   </SelectTrigger>
   <SelectContent>
    <SelectGroup>
     <SelectLabel>{selectLabel}</SelectLabel>
     {data &&
      data.map((item, index) => (
       <SelectItem key={index} value={item}>
        {item}
       </SelectItem>
      ))}
    </SelectGroup>
   </SelectContent>
  </Select>
 );
}
