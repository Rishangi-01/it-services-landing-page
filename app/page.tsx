import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQ />
      <ContactSection />
    </div>
  );
}
