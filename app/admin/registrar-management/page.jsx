import Title from "@/components/title";
import { adminNavmenu } from "@/lib/data";

const { name, employeeId } = adminNavmenu.user;

export default function RegistrarManagementIndex() {
 return (
  <section className="space-y-5">
   <Title className="text-2xl">
    Welcome {name} to the Registrar Management page!
   </Title>

   <p className="text-muted-foreground text-center">
    For any problem in the system, contact System Administrator for details.
    Click the links under MENU to select operation. It is recommended to logout
    by clicking the logout button everytime you leave your PC.
   </p>

   <p className="text-muted-foreground text-center">
    If you do not agree with the conditions or you are not{" "}
    <span className="font-bold">{employeeId}</span> please logout.
   </p>
  </section>
 );
}
