import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function ResidenceData({ student = {} }) {
 return (
  <section className="space-y-5 print:space-y-5">
   <div className="grid grid-cols-1 md:grid-cols-3 gap-3 print:grid print:grid-cols-3 print:gap-3">
    {/* title */}
    <div className="md:col-span-3 print:col-span-3">
     <Title className="text-start print:text-start">
      II - Learner's Residence Data
     </Title>
    </div>

    {/* current address */}
    <div className="md:col-span-3 print:col-span-3">
     <Title className="text-start italic text-base print:text-start print:italic print:text-base">
      Current Contact Address:
     </Title>
    </div>

    {/* contact number guardian name */}
    <div className="md:col-span-2 print:col-span-2">
     <SubTitle>Contact Number / Guardian Name</SubTitle>
     <p className="font-medium print:font-medium">
      {student.contact_number_or_guradian_name}
     </p>
    </div>

    {/* relation */}
    <div>
     <SubTitle>Relation</SubTitle>
     <p className="font-medium print:font-medium">{student.relation}</p>
    </div>

    {/* house no/street/baranggay */}
    <div className="md:col-span-2 lg:col-span-1">
     <SubTitle>House No. / Street / Baranggay</SubTitle>
     <p className="font-medium print:font-medium">{student.baranggay}</p>
    </div>

    {/* city municipality */}
    <div>
     <SubTitle>City/Municipality</SubTitle>
     <p className="font-medium print:font-medium">{student.municipality}</p>
    </div>

    {/* Province State */}
    <div>
     <SubTitle>Province / State</SubTitle>
     <p className="font-medium print:font-medium">{student.province}</p>
    </div>

    {/* zip code */}
    <div>
     <SubTitle>Zip Code</SubTitle>
     <p className="font-medium print:font-medium">{student.zip_code}</p>
    </div>

    {/* country */}
    <div>
     <SubTitle>Country</SubTitle>
     <p className="font-medium print:font-medium">{student.country}</p>
    </div>
   </div>
  </section>
 );
}
