import Aboutme from "@/components/Aboutme";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Projects from "@/components/Project";
import DataProvider from "@/contexts/DataProvider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <Aboutme />
        <Education />
        <Experience />
        {/* <Blog /> */}
        <Projects />
        <Interests />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
