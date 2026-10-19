
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AiTypes from "../components/AiTypes";
import AiBenefits from "../components/AiBenefits";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {   
  return (
    <>
       <Navbar />
       <main>
            <HeroSection />
            <AiTypes />
            <AiBenefits />
            <Contact />
       </main>
       <Footer />
    </>
  );
}

export default Home;