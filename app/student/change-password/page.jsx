import TextInput from "@/components/text-input";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";

export default function ChangePassword() {
 return (
  <section className="space-y-5">
   <div>
    <Title>Change Password</Title>
   </div>

   <div className="space-y-2">
    <Title className="text-base text-start">Rules to change Password:</Title>
    <ol className="text-muted-foreground text-sm">
     <li>
      1. Length of password must be more than 4 characters and less than 26
      characters
     </li>
     <li>2. Password should not be same as Login ID or Employee ID</li>
    </ol>
   </div>

   <div className="space-y-5 md:w-1/2">
    <TextInput labelTitle="Current Password" />

    <TextInput labelTitle="New Password" />

    <TextInput labelTitle="Confirm New Password" />

    <Button size="sm">Save</Button>
   </div>
  </section>
 );
}
