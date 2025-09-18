import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DataProvider from "@/contexts/DataProvider";
import Image from "next/image";

export default function Home() {
  return (
    <DataProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main>
          <Hero />
          <Aboutme />
          <Education />
          <Contact />
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
    </DataProvider>
  );
}
