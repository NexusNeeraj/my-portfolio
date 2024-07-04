import React from "react";
import Navbar from "./components/Home/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Tools from "./components/Skills/Tools";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Home/Hero";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;