import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Featured />
      <WhyUs />
      <About />
      <FAQ />
    </div>
  );
}
