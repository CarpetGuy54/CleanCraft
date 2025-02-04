import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <CTASection />
    </div>
  );
}
