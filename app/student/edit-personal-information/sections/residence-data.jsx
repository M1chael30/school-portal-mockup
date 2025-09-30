import Title from "@/components/title";
import SubTitle from "@/components/sub-title";
import { Input } from "@/components/ui/input";

export default function ResidenceData() {
 return (
  <section className="space-y-5">
   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    {/* title */}
    <div className="md:col-span-3">
     <Title className="text-start">II - Learner's Residence Data</Title>
    </div>

    {/* current address */}
    <div className="md:col-span-3">
     <Title className="text-start italic text-base">
      Current Contact Address:
     </Title>
    </div>

    {/* contact number guardian name */}
    <div className="space-y-2">
     <SubTitle>Contact Number / Guardian Name</SubTitle>
     <Input defaultValue="09123456789" />
    </div>

    {/* relation */}
    <div className="md:col-span-2 space-y-2">
     <SubTitle>Relation</SubTitle>
     <Input className="md:w-1/2" defaultValue="Parents" />
    </div>

    {/* house no/street/baranggay */}
    <div className="space-y-2">
     <SubTitle>House No. / Street / Baranggay</SubTitle>
     <Input defaultValue="Brgy. Santor" />
    </div>

    {/* city municipality */}
    <div className="space-y-2">
     <SubTitle>City/Municipality</SubTitle>
     <Input defaultValue="Bongabon" />
    </div>

    {/* Province State */}
    <div className="space-y-2">
     <SubTitle>Province / State</SubTitle>
     <Input defaultValue="Nueva Ecija" />
    </div>

    {/* zip code */}
    <div className="space-y-2">
     <SubTitle>Zip Code</SubTitle>
     <Input defaultValue="3128" />
    </div>

    {/* country */}
    <div className="space-y-2">
     <SubTitle>Country</SubTitle>
     <Input defaultValue="Philippines" />
    </div>
   </div>
  </section>
 );
}
