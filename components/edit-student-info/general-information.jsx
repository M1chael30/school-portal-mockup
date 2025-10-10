import SubTitle from "@/components/sub-title";

export default function GeneralInformation({ student = {} }) {
 return (
  <section>
   <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
    {/* grade level */}
    <div>
     <SubTitle>Grade Level</SubTitle>
     <p className="font-medium">{student.grade_level}</p>
    </div>
    {/* school year */}
    <div>
     <SubTitle>School Year</SubTitle>
     <p className="font-medium">{student.school_year}</p>
    </div>
   </div>
  </section>
 );
}
