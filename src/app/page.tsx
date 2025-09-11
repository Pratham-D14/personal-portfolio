import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <Hero />
      </main>
      {/* <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Interests />
        <Contact />
      </main> */}
      {/* <Footer /> */}
    </div>
  );
}
