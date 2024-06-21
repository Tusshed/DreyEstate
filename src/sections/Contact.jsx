import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
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
    <div
      div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"}pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        }pb-20 lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h1 className="text-2x1 text-black font-semibold dark:text-white">
            {" "}
            Send us a message
          </h1>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
