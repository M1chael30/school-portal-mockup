import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function PhysicalDescription() {
 return (
  <section>
   <div className="grid md:grid-cols-5 grid-cols-1 gap-3 print:grid print:grid-cols-5 print:gap-3">
    {/* title */}
    <div className="md:col-span-5 print:col-span-5">
     <Title className="text-start print:text-start">
      III - Physical Description
     </Title>
    </div>

    {/* height */}
    <div>
     <SubTitle>Height(cms)</SubTitle>
     <p className="font-medium print:font-medium">160</p>
    </div>

    {/* weight */}
    <div>
     <SubTitle>Weight(kg)</SubTitle>
     <p className="font-medium print:font-medium">60</p>
    </div>

    {/* build */}
    <div>
     <SubTitle>Build</SubTitle>
     <p className="font-medium print:font-medium"></p>
    </div>

    {/* eye color */}
    <div>
     <SubTitle>Eye Color</SubTitle>
     <p className="font-medium print:font-medium">Black</p>
    </div>

    {/* hair color */}
    <div>
     <SubTitle>Hair Color</SubTitle>
     <p className="font-medium print:font-medium">Black</p>
    </div>
   </div>
  </section>
 );
}
