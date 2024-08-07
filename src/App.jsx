import Header from "./components/Header";
import { DarkModeProvider } from "./components/DarkModeContext";
import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Contact from "./sections/Contact";
import Footing from "./components/Footing";
import Videos from "./sections/Videos";
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
        <Videos />
        <Footing />
      </DarkModeProvider>
    </div>
  );
};

export default App;
