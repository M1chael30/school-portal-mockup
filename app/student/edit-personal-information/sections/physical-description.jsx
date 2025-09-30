import Title from "@/components/title";
import SubTitle from "@/components/sub-title";
import { Input } from "@/components/ui/input";

export default function PhysicalDescription() {
 return (
  <section>
   <div className="grid md:grid-cols-5 grid-cols-1 gap-3">
    {/* title */}
    <div className="md:col-span-5">
     <Title className="text-start">III - Physical Description</Title>
    </div>

    {/* height */}
    <div className="space-y-2">
     <SubTitle>Height (cms)</SubTitle>
     <Input type="number" defaultValue="160" />
    </div>

    {/* weight */}
    <div className="space-y-2">
     <SubTitle>Weight (kg)</SubTitle>
     <Input type="number" defaultValue="60" />
    </div>

    {/* build */}
    <div className="space-y-2">
     <SubTitle>Build</SubTitle>
     <Input placeholder="Build" />
    </div>

    {/* eye color */}
    <div className="space-y-2">
     <SubTitle>Eye Color</SubTitle>
     <Input defaultValue="Black" />
    </div>

    {/* hair color */}
    <div className="space-y-2">
     <SubTitle>Hair Color</SubTitle>
     <Input defaultValue="Black" />
    </div>
   </div>
  </section>
 );
}
