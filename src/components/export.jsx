import est2 from "../assets/images/est2.png";
import est3 from "../assets/images/est3.png";
import grand from "../assets/images/grandview.jpeg";
import rome from "../assets/images/rome.jpeg";
import london from "../assets/images/london park.jpg";
import eko from "../assets/images/ekocity.jpeg";

import { MdNoteAlt } from "react-icons/md";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

export const property = [
  {
    images: est3,
    address: "Aiyegun-Oleyo, Ibadan.",
    name: "West park & Gardens",
    price: "₦12,000,000",
    about: "Beautiful neighborhood",
    bed: 4,
    bath: 3,
    area: "270 Sqm",
    owner: "Alice adams",
  },
  {
    images: est2,
    address: "Sagamu,Ogun State",
    name: "Winter park and gardens",
    price: "₦10,000,000",
    about: "Beautiful neighborhood",
    bed: 4,
    bath: 3,
    area: "540 Sqm",
    owner: "Drew Alice",
  },
  {
    images: grand,
    address: "Atan-Ota,Ogun State",
    name: "Grandview Park & Gardens",
    price: "₦5,000,000",
    about: "Beautiful estate with top-tier facilities",
    bed: 4,
    bath: 3,
    area: "648 Sqm",
    owner: "Fursi Bam",
  },
  {
    images: rome,
    address: "Imota Emuren,Ogun State",
    name: "City of Rome.",
    price: "₦7,000,000",
    about: "Beautiful estate neighborhood",
    bed: 4,
    bath: 3,
    area: "600 Sqm",
    owner: "Neon Alice",
  },
  {
    images: london,
    address: "Ologuneru,Ibadan",
    name: "London Park & Gardens",
    price: "₦7,000,000",
    about: "Beautiful neighborhood",
    bed: 4,
    bath: 3,
    area: "540 Sqm",
    owner: "Firari Alice",
  },
  {
    images: eko,
    address: "Lekki-Epe",
    name: "Eko City, Ile-Aje",
    price: "₦100,000,000",
    about: "Beautiful neighborhood",
    bed: 4,
    bath: 3,
    area: "500 Sqm",
    owner: "Jordan Bram",
  },
];

export const service = [
  {
    icon: MdNoteAlt,
    title: "Sell your home",
    desc: "We sell your home at the best market price",
  },
  {
    icon: FaHome,
    title: "Home loans",
    desc: "We offer you free consultancy to get a loan",
  },
  {
    icon: GoLaw,
    title: "Legal services",
    desc: "Expert legal help for all related property items",
  },
  {
    icon: FaSearch,
    title: "Home inspection",
    desc: "We make sure you get what you were promised",
  },
  {
    icon: FaNotesMedical,
    title: "Evaluation",
    desc: "We offer you free evaluation to get a mortgage loan",
  },
  {
    icon: FaCameraRetro,
    title: "Photoshoot",
    desc: "We prepare your home visual presentation",
  },
];
