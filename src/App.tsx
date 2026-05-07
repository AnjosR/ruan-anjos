import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Quotes } from "./components/Quotes";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true, offset: 50 });
  }, []);

  return (
    <div className="text-neutral-300 min-h-screen flex flex-col selection:bg-orange-500 selection:text-black">
      <Hero />
      <About />
      <Achievements />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
