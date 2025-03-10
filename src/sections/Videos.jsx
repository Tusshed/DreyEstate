import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Videos = () => {
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
      className={`${darkMode ? "dark bg-gray-800" : "light bg-transparent"}`}
    >
      <div className=" text-gray-900 dark:text-white" id="video-section">
        <header className="text-center py-8" data-aos="zoom-in">
          <h1 className="text-3xl text-center font-bold">
            {" "}
            Our Estate Videos{" "}
          </h1>{" "}
        </header>
        <div className="container mx-auto px-4">
          <div className="adverts my-8 text-center" data-aos="zoom-in">
            {" "}
            {/* Adverts  here */}{" "}
            <p className="bg-lime-600 p-4 rounded" id="advert">
              Have A Look At Our Best Selling Estates{" "}
            </p>{" "}
          </div>
          <div
            className="video-container flex flex-wrap justify-center"
            data-aos="zoom-in"
          >
            <div className="video w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow rounded overflow-hidden">
                <iframe
                  className="w-full"
                  height="315"
                  src="https://jumpshare.com/embed/4TzBzbFle565b0goOp9Y"
                  title="Vidco Series"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>{" "}
                <h3 className="text-lg font-semibold p-4"> Vidco Series </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="video w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow rounded overflow-hidden">
                <iframe
                  className="w-full"
                  height="315"
                  src="https://jumpshare.com/embed/nGSZIXkv6cSXIj1Ae1xl"
                  title="London Park & Gardens"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>{" "}
                <h3 className="text-lg font-semibold p-4">
                  {" "}
                  London Park & Gardens{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="video w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow rounded overflow-hidden">
                <iframe
                  className="w-full"
                  height="315"
                  src="https://jumpshare.com/embed/VqLtvkzMajZG7OlElvpj"
                  title="City Park & Gardens"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>{" "}
                <h3 className="text-lg font-semibold p-4">
                  {" "}
                  City Park & Gardens{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="video w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow rounded overflow-hidden">
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube.com/embed/xeHXLC0keYg?si=zV8cajCS3zfTDkt7"
                  title="West Park & Gardens"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>{" "}
                <h3 className="text-lg font-semibold p-4">
                  {" "}
                  West Park & Gardens{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Videos;
