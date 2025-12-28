import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import ReasonsToAttend from "@/components/landing/ReasonsToAttend";
import Theme from "@/components/landing/Theme";
import Speakers from "@/components/landing/Speakers";
import Timeline from "@/components/landing/Timeline";
import Sponsors from "@/components/landing/Sponsors";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <ReasonsToAttend />
      <Theme />
      <Speakers />
      <Timeline />
      <Sponsors />
      <Footer />
    </main>
  );
}
