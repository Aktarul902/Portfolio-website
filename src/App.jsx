import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scrollY",
        `${window.scrollY}px`
      );
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <Work />
        <About />
        <Skills />
        <Education />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}