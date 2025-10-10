import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function PhysicalDescription({ student = {} }) {
 return (
  <section>
   <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-3 print:grid print:grid-cols-5 print:gap-3">
    {/* title */}
    <div className="md:col-span-3 lg:col-span-5 print:col-span-5">
     <Title className="text-start print:text-start">
      III - Physical Description
     </Title>
    </div>

    {/* height */}
    <div>
     <SubTitle>Height(cms)</SubTitle>
     <p className="font-medium print:font-medium">{student.height}</p>
    </div>

    {/* weight */}
    <div>
     <SubTitle>Weight(kg)</SubTitle>
     <p className="font-medium print:font-medium">{student.weight}</p>
    </div>

    {/* build */}
    <div>
     <SubTitle>Build</SubTitle>
     <p className="font-medium print:font-medium">{student.build}</p>
    </div>

    {/* eye color */}
    <div>
     <SubTitle>Eye Color</SubTitle>
     <p className="font-medium print:font-medium">{student.eye_color}</p>
    </div>

    {/* hair color */}
    <div>
     <SubTitle>Hair Color</SubTitle>
     <p className="font-medium print:font-medium">{student.hair_color}</p>
    </div>
   </div>
  </section>
 );
}
