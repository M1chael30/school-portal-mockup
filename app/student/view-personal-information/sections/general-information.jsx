import SubTitle from "@/components/sub-title";

export default function GeneralInformation() {
 return (
  <section>
   <div className="grid md:grid-cols-3 grid-cols-1 gap-3 print:grid print:grid-cols-3 print:gap-3">
    {/* grade level */}
    <div>
     <SubTitle>Grade Level</SubTitle>
     <p className="font-medium print:font-medium">10</p>
    </div>

    {/* school year */}
    <div>
     <SubTitle>School Year</SubTitle>
     <p className="font-medium print:font-medium">2025 - 2026</p>
    </div>
   </div>
  </section>
 );
}
