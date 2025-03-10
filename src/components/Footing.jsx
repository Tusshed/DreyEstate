import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import eko from "../assets/images/ekocity.jpeg";
import est3 from "../assets/images/est3.png";
import { FaVideo } from "react-icons/fa6";

const Footing = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About US</h1>
          <p className="text-slate-200 text-justify">
            Our mission is to empower you with the information, tools, and
            support you need to make informed decisions in the real estate
            market. Whether you're buying, selling, or renting, we strive to
            offer comprehensive solutions that cater to your unique requirements
            and aspirations.
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <Link
              to="video-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="p-3 rounded-xl bg-white hover:bg-lime-300 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <FaVideo className="size-5" />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h1 className="text-white text-2xl font-semibold">Contact US</h1>
            <div className="flex justify-center items-center gap-3">
              <FaBuilding className="text-white size-5" />
              <p className="text-slate-200">
                Ring Road; Townplanning way, Beside Zartech ,Ibadan.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaMobile className="text-white size-5" />
              <p className="text-slate-200">+234 805 938 1681.</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <IoMdMail className="text-white size-5" />
              <p className="text-slate-200">
                Dareadronhomesproperties@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h1 className="text-white text-2xl font-semibold">
              Latest Properties
            </h1>
            <div className="flex justify-center items-center gap-4">
              <img
                src={est3}
                alt=""
                className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
              />
              <h1 className="text-lg text-white">West park & Gardens</h1>
              <p className="text-slate-400">₦12,000,000</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <img
                src={eko}
                alt=""
                className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
              />
              <h1 className="text-lg text-white">Eko City, Lekki-Epe</h1>
              <p className="text-slate-400">₦100,000,000</p>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 ">
            <div className="text-md text-center text-white">
              Copyright © 2024 . All Right Reserved Tussh
              <span className="text-gray-50">♥</span>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top button */}
      <div
        id="icon-box"
        className=" bg-red-600 p-4 rounded-full ☐ hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      {/* dark mode toggle button section */}
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4
rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6"
        >
          {darkMode ? (
            <FaMoon size={25} className="text-black" />
          ) : (
            <FaSun size={25} className="text-black" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Footing;
