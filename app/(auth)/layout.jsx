import LoginImage from "./sections/login-image";
import LoginLogo from "./sections/login-logo";

export default function LoginPage({ children }) {
 return (
  <main className="grid min-h-svh lg:grid-cols-2">
   {/* left side */}
   <section className="flex flex-col gap-4 p-6 md:p-10">
    {/* header */}
    <LoginLogo />

    {/* main layout */}
    <div className="flex flex-1 items-center justify-center">
     <div className="w-full max-w-lg">{children}</div>
    </div>
   </section>

   {/* right side */}
   <LoginImage />
  </main>
 );
}
