"use client";

import TextInput from "@/components/text-input";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function LoginCard({ data = {} }) {
 const router = useRouter();

 return (
  <Card className="border-0">
   <CardHeader>
    <CardTitle>{data.title}</CardTitle>
    <CardDescription>{data.description}</CardDescription>
   </CardHeader>
   <CardContent className="space-y-6">
    <TextInput labelTitle={data.labelTitleOne} />
    <TextInput labelTitle={data.labelTitleTwo} type="password" />
   </CardContent>
   <CardFooter>
    <Button onClick={() => router.push(data.link)}>Login</Button>
   </CardFooter>
  </Card>
 );
}
