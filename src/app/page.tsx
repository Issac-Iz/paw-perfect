import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Story from "@/components/story";
import Excellence from "@/components/excellence";
import GroomingServices from "@/components/grooming-services";
import VisitCTA from "@/components/visit-cta";
import Boarding from "@/components/boarding";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import BookingCTA from "@/components/booking-cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Excellence />
        <GroomingServices />
        <VisitCTA />
        <Boarding />
        <Gallery />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
