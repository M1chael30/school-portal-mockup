import SubTitle from "@/components/sub-title";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IndexPage() {
 return (
  <section className="min-h-screen flex justify-center p-5">
   <div className="flex flex-col items-center">
    <Title className="text-5xl">SNHS</Title>

    <SubTitle className="text-2xl">Links</SubTitle>

    <div className="flex items-center gap-3">
     {/* login */}
     <Button asChild>
      <Link href="/login">Login Page</Link>
     </Button>

     {/* admin */}
     <Button asChild>
      <Link href="/admin">Admin Page</Link>
     </Button>

     {/* teacher */}
     <Button asChild>
      <Link href="/teacher">Teacher Page</Link>
     </Button>

     {/* student */}
     <Button asChild>
      <Link href="/student">Student Page</Link>
     </Button>
    </div>
   </div>
  </section>
 );
}
