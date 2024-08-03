import React, { useEffect } from "react";
import heroimg from "../assets/images/pexels-rdne-8293778.jpg";
import dimension from "../assets/images/3dview.jpeg";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-green-500"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${dimension})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold 1g:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next Property in Nigeria
          </h1>

          <p
            data-aos="zoom-in"
            className="text-stone-300 text-xl lg:pr-[500px] pr-0"
          >
            Start your journey with us and discover a wide range of properties
            that suits every budget and lifestyle. Our platform wil find you the
            perfect home in Nigeria with ease and confidences
          </p>
        </section>
      </div>
    </>
  );
};

export default Hero;
