import Title from "@/components/title";
import TextInput from "../text-input";

export default function PhysicalDescription({ student = {} }) {
 return (
  <section>
   <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-5">
    {/* title */}
    <div className="md:col-span-5">
     <Title className="text-start">III - Physical Description</Title>
    </div>

    {/* height */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Height (cms)"
      className="space-y-2"
      defaultValue={student.height}
     />
    </div>

    {/* weight */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Weight (kg)"
      className="space-y-2"
      defaultValue={student.weight}
     />
    </div>

    {/* build */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Build"
      className="space-y-2"
      defaultValue={student.build}
     />
    </div>

    {/* eye color */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Eye Color"
      className="space-y-2"
      defaultValue={student.eye_color}
     />
    </div>

    {/* hair color */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Hair Color"
      className="space-y-2"
      defaultValue={student.hair_color}
     />
    </div>
   </div>
  </section>
 );
}
