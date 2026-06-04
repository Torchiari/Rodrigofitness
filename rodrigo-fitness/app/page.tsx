import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
