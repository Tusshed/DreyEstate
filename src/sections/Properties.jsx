import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaPlus,
  FaCamera,
  FaMapMarkerAlt,
  FaVideo,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
const Properties = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h3 data-aos="zoom-in" className="text-lime-500 dark:text-white">
            PROPERTIES
          </h3>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest
          </h1>
        </div>
        {/*properties grid here*/}
        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center gap-8"
        >
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl w-full"
            >
              <div
                id="image-box"
                className="bg-cover bg-center h-[250px] rounded-xl p-4 flex-col justify-between items-end"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div id="top" className="flex justify-between items-end w-full">
                  <div>
                    <button className="px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Featured
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <button className="px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Sales
                    </button>
                    <button className="px-3 py-1 bg-lime-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Active
                    </button>
                  </div>
                </div>

                <div
                  id="bottom"
                  className="flex justify-between items-end w-full p-4"
                >
                  <div className="flex justify-start items-center gap-2">
                    <FaMapMarkerAlt className="size-4 text-green-500" />
                    <h1 className="text-slate-800">{item.address}</h1>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                <h1 className="text-xl text-black font-semibold dark:text-white">
                  {item.name}
                </h1>
                <h1 className="text-2xl text-green-600 font-bold dark:text-white">
                  {item.price}
                </h1>
                <p className="dark:text-white">{item.about}</p>
                <div
                  id="icons"
                  className="flex justify-center items-center gap-2"
                >
                  <div className="flex justify-center items-center gap-2">
                    <MdSpaceDashboard className="size-5 text-emerald-400" />
                    <h1 className="dark:text-white">{item.area}</h1>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-200 mt-8"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
