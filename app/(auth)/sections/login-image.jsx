import Image from "next/image";

export default function LoginImage() {
 return (
  <section className="bg-muted relative hidden lg:block">
   <Image
    fill
    src="/photo/school_img.jpg"
    alt="school_img"
    className="absolute inset-0 h-full w-full object-center"
   />
  </section>
 );
}
