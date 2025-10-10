import Title from "@/components/title";
import TextInput from "../text-input";

export default function ResidenceData({ student = {} }) {
 return (
  <section className="space-y-5">
   <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
    {/* title */}
    <div className="md:col-span-4">
     <Title className="text-start">II - Learner's Residence Data</Title>
    </div>

    {/* current address */}
    <div className="md:col-span-4">
     <Title className="text-start italic text-base">
      Current Contact Address:
     </Title>
    </div>

    {/* contact number guardian name */}
    <div className="space-y-3 md:col-span-3">
     <TextInput
      labelTitle="Contact Number / Guardian Name"
      className="space-y-2"
      defaultValue={student.contact_number_or_guradian_name}
     />
    </div>

    {/* relation */}
    <div className="space-y-2">
     <TextInput
      labelTitle="Relation"
      className="space-y-2"
      defaultValue={student.relation}
     />
    </div>

    {/* house no/street/baranggay */}
    <div className="space-y-2 md:col-span-2">
     <TextInput
      labelTitle="House No. / Street / Baranggay"
      className="space-y-2"
      defaultValue={student.baranggay}
     />
    </div>

    {/* city municipality */}
    <div className="space-y-2 md:col-span-2">
     <TextInput
      labelTitle="City/Municipality"
      className="space-y-2"
      defaultValue={student.municipality}
     />
    </div>

    {/* Province State */}
    <div className="space-y-2 md:col-span-2">
     <TextInput
      labelTitle="Province/State"
      className="space-y-2"
      defaultValue={student.province}
     />
    </div>

    {/* zip code */}
    <div className="space-y-2 md:col-span-2">
     <TextInput
      labelTitle="Zip Code"
      className="space-y-2"
      defaultValue={student.zip_code}
     />
    </div>

    {/* country */}
    <div className="space-y-2 md:col-span-2">
     <TextInput
      labelTitle="Country"
      className="space-y-2"
      defaultValue={student.country}
     />
    </div>
   </div>
  </section>
 );
}
