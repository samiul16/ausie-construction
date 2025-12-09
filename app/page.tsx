import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <FAQ />
    </div>
  );
}

