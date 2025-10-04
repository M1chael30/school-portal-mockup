import SubTitle from "@/components/sub-title";
import Title from "@/components/title";
import { adminNavmenu } from "@/lib/data";

const { name, employeeId } = adminNavmenu.user;

export default function AdmissionIndex() {
 return (
  <section className="space-y-5">
   <Title className="text-2xl">Welcome {name} to the Admission page!</Title>

   <SubTitle className="text-center text-base">
    For any problem in the system, contact System Administrator for details.
    Click the links under MENU to select operation. It is recommended to logout
    by clicking the logout button everytime you leave your PC.
   </SubTitle>

   <SubTitle className="text-center text-base">
    If you do not agree with the conditions or you are not{" "}
    <span className="font-bold">{employeeId}</span> please logout.
   </SubTitle>
  </section>
 );
}
