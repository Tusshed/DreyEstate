import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            optio, alias magni excepturi illo dolorem?
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
              <p className="text-slate-200">@mail.com.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h1 className="text-white text-2xl font-semibold">
              Latest Properties
            </h1>
            <div className="flex justify-center items-center gap-4">
              <img
                src={prop7}
                alt=""
                className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
              />
              <h1 className="text-lg text-white">West park & Gardens</h1>
              <p className="text-slate-400">₦9,000,000</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <img
                src={prop8}
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
              <span class="text-gray-50">♥</span>
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
    </div>
  );
};

export default Footing;
