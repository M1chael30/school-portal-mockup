import Title from "@/components/title";
import TextInput from "../text-input";

export default function FamilyData({ student = {} }) {
 return (
  <section className="space-y-5">
   <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
    {/* title */}
    <div className="md:col-span-4">
     <Title className="text-start">IV - Family Data</Title>
    </div>

    {/* father's name */}
    <div className="md:col-span-4">
     <Title className="text-start italic text-base">Father's Name:</Title>
    </div>

    {/* last name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Father's Last Name"
      className="space-y-2"
      defaultValue={student.fathers_last_name}
     />
    </div>

    {/* first name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Father's First Name"
      className="space-y-2"
      defaultValue={student.fathers_first_name}
     />
    </div>

    {/* middle name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Father's Middle Name"
      className="space-y-2"
      defaultValue={student.fathers_middle_name}
     />
    </div>

    {/* extn name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Father's (Extn. Name if any)"
      className="space-y-2"
      defaultValue={student.fathers_extension_name}
     />
    </div>
   </div>

   <hr />

   <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
    {/* mother's maiden name */}
    <div className="md:col-span-4">
     <Title className="text-start italic text-base">
      Mother's Maiden Name:
     </Title>
    </div>

    {/* last name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Mother's Last Name"
      className="space-y-2"
      defaultValue={student.mothers_last_name}
     />
    </div>

    {/* first name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Mother's First Name"
      className="space-y-2"
      defaultValue={student.mothers_first_name}
     />
    </div>

    {/* middle name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Mother's Middle Name"
      className="space-y-2"
      defaultValue={student.mothers_middle_name}
     />
    </div>

    {/* extn name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Mother's (Extn. Name if any)"
      className="space-y-2"
      defaultValue={student.mothers_extension_name}
     />
    </div>
   </div>

   <hr />

   <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
    {/* legal guardian's name */}
    <div className="md:col-span-4">
     <Title className="text-start italic text-base">
      Legal Guardian's Name:
     </Title>
    </div>

    {/* last name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Legal Guardian's Last Name"
      className="space-y-2"
      defaultValue={student.legal_guardian_last_name}
     />
    </div>

    {/* first name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Legal Guardian's First Name"
      className="space-y-2"
      defaultValue={student.legal_guardian_first_name}
     />
    </div>

    {/* middle name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Legal Guardian's Middle Name"
      className="space-y-2"
      defaultValue={student.legal_guardian_middle_name}
     />
    </div>

    {/* extn name */}
    <div className="space-y-2 md:col-span-2 lg:col-span-1">
     <TextInput
      labelTitle="Legal Guardian's (Extn. Name if any)"
      className="space-y-2"
      defaultValue={student.legal_guardian_extension_name}
     />
    </div>
   </div>
  </section>
 );
}
