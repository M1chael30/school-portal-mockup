import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardAction,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  teacherNavmenu } from "@/lib/data";
import SubTitle from "@/components/sub-title";

export default function PersonalDetails() {
 const { name, avatar, subjects } = teacherNavmenu.user;

 return (
  <section className="space-y-5">
   <Title className="text-start">Personal Details</Title>
   <Card>
    <CardHeader>
     <CardTitle>
      <div className="flex items-center gap-4">
       <Avatar className="size-10">
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
       </Avatar>
       <Title className="text-lg font-medium">{name}</Title>
      </div>
     </CardTitle>
     <CardAction>
      <Button size="sm">Edit personal details</Button>
     </CardAction>
    </CardHeader>
    <CardContent>
     <div className="flex flex-col gap-3">
      {/* name */}
      <div className="">
       <SubTitle>Name</SubTitle>
       <p className="font-medium">{name}</p>
      </div>
      {/* gender */}
      <div className="">
       <SubTitle>Gender</SubTitle>
       <p className="font-medium">Male</p>
      </div>
      {/* contact */}
      <div className="">
       <SubTitle>Contact Number</SubTitle>
       <p className="font-medium">09123456789</p>
      </div>
      {/* subjects */}
      <div className="">
       <SubTitle>Subjects</SubTitle>
       <p className="font-medium">{subjects}</p>
      </div>
      {/* address */}
      <div className="">
       <SubTitle>Address</SubTitle>
       <p className="font-medium">Brgy. Santor, Bongabon, Nueva Ecija</p>
      </div>
     </div>
    </CardContent>
   </Card>
  </section>
 );
}
