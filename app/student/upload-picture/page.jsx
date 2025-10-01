import SubTitle from "@/components/sub-title";
import Title from "@/components/title";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UploadPicture() {
 return (
  <section className="space-y-6">
   {/* title */}
   <div>
    <Title>Upload Picture </Title>
   </div>

   {/* picture */}
   <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
    <SubTitle>Picture in system</SubTitle>

    <Avatar className="size-30 rounded-lg">
     <AvatarFallback className="rounded-lg text-4xl">J</AvatarFallback>
    </Avatar>
   </div>

   {/* note */}
   <div className="space-y-2">
    <p>Note:</p>
    <SubTitle className="text-destructive">
     Picture and in System are already approved by admin and currently in use in
     account profile. To change your picture, double click the row below and
     upload new picture. Uploaded files will go through approval process before
     it is used in account profile. To avoid rejection, please follow the
     picture and signature file requirement.
    </SubTitle>
   </div>

   {/* upload picture btn */}
   <div className="space-y-3">
    <Avatar className="size-30 rounded-lg">
     <AvatarFallback className="rounded-lg text-4xl">J</AvatarFallback>
    </Avatar>

    <SubTitle>Picture will appear at the top once you upload it.</SubTitle>

    <Input className="md:w-1/2" type="file" />

    <div className="flex items-center gap-3">
     <Button size="sm">Upload Picture</Button>
     <Button size="sm" variant="outline">
      Undo
     </Button>
    </div>
   </div>

   {/* picture requirement */}
   <div className="space-y-2  ">
    <p>Picture File Requirement:</p>
    <SubTitle>
     3x4 (400x400 pixel) picture size, portrait, white background, *.JPG/PNG
     file.
    </SubTitle>
   </div>
  </section>
 );
}
