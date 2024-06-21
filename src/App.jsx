import Header from "./components/Header";
import { DarkModeProvider } from "./components/DarkModeContext";
import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Contact from "./sections/Contact";
import Footing from "./components/Footing";
import Services from "./sections/Services";
const App = () => {
  return (
    <div>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />

        <Contact />
        <Footing />
      </DarkModeProvider>
    </div>
  );
};

export default App;
