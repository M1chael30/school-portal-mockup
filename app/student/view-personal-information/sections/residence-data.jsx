import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function ResidenceData() {
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
    <div>
     <SubTitle>Contact Number / Guardian Name</SubTitle>
     <p className="font-medium print:font-medium">09123456789</p>
    </div>

    {/* relation */}
    <div className="md:col-span-2 print:col-span-2">
     <SubTitle>Relation</SubTitle>
     <p className="font-medium print:font-medium">Parents</p>
    </div>

    {/* house no/street/baranggay */}
    <div>
     <SubTitle>House No. / Street / Baranggay</SubTitle>
     <p className="font-medium print:font-medium">Brgy. Santor</p>
    </div>

    {/* city municipality */}
    <div>
     <SubTitle>City/Municipality</SubTitle>
     <p className="font-medium print:font-medium">Bongabon</p>
    </div>

    {/* Province State */}
    <div>
     <SubTitle>Province / State</SubTitle>
     <p className="font-medium print:font-medium">Nueva Ecija</p>
    </div>

    {/* zip code */}
    <div>
     <SubTitle>Zip Code</SubTitle>
     <p className="font-medium print:font-medium">3128</p>
    </div>

    {/* country */}
    <div>
     <SubTitle>Country</SubTitle>
     <p className="font-medium print:font-medium">Philippines</p>
    </div>
   </div>
  </section>
 );
}
