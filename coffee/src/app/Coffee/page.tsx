import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Gallery from "@/app/components/Gallery";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
