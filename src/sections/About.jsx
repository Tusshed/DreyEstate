import React, { useEffect } from "react";
import heroimg from "../assets/images/pexels-rdne-8293778.jpg";
import { useDarkMode } from "../components/DarkModeContext";

import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
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
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={heroimg}
          alt="abt img"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className="text-lime-500 dark:text-white">
          WHO WE ARE{" "}
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black text-[40px] font-semibold leading-10 dark:text-white"
        >
          Experts in Every Avenue of Real Estate
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-xl text-gray-600 dark:text-white text-justify"
        >
          We offer a personalized service that caters to your unique needs.
          Whether you're buying, selling, or investing, our personalized
          approach ensures a seamless and stress-free experience. Trust us to
          guide you every step of the way as you embark on your journey to find
          the perfect home or investment property. Your satisfaction is our
          priority, and we are here to make your real estate experience seamless
          and successful.
        </p>
        <button className="bg-lime-600 dark:bg-green-950 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-110">
          Contact
        </button>
      </div>
    </section>
  );
};

export default About;
