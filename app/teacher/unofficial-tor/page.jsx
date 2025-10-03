"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function StudentUnofficialTOR() {
 const router = useRouter();

 return (
  <section>
   <Button onClick={() => router.push("/")}>Home</Button>
  </section>
 );
}
