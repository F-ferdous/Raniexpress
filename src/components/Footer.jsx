import React from "react";
import { MdFacebook, MdHome } from "react-icons/md";
import { BsInstagram, BsYoutube, BsTwitter, BsLinkedin } from "react-icons/bs";
import Logo from "../img/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-orange-500">Get Notified</span> on Recent
          Updates
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-orange-400 hover:bg-orange-500 duration-300 px-5 py-2.5
           rounded-md text-white md:w-auto w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <ul>
          <img src={Logo} className="w-32 object-cover" />
          <p className="text-gray-400 text-sm text-justify">
            Get the best deals on all your favorite products at Rani Express!
            Shop now for fast and reliable delivery, easy returns, and a wide
            selection of items at great prices!
          </p>
        </ul>
        <ul>
          <h1 className="mb-1 font-semibold">Useful Links</h1>
          <li>
            <a
              className="text-gray-400 hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
              href="#"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
              href="#"
            >
              Register
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
              href="#"
            >
              My orders
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <ul>
          <h1 className="mb-1 font-semibold">Address</h1>
          <li className="text-gray-400 text-sm leading-6">
            <span className="font-bold">Office: </span>Mirpur 12, Dhaka,
            Bangladesh
          </li>
          <li className="text-gray-400 text-sm leading-6">
            <span className="font-bold">Mail: </span>info@raniexpress.com
          </li>
          <li className="text-gray-400 text-sm leading-6">
            <span className="font-bold">Phone: </span>0171-00000
          </li>
        </ul>
        <ul>
          <h1 className="mb-1 font-semibold">Affiliates</h1>
          <li>
            <a
              className="text-gray-400 hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
              href="#"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
              href="#"
            >
              Marchant
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
              href="#"
            >
              Conditions
            </a>
          </li>
          <li>
            <a
              className="text-gray-400 hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6"
              href="#"
            >
              Invest
            </a>
          </li>
        </ul>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Rani Express. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="text-orange-500">
          <span
            className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-orange-500
        duration-300 "
          >
            <MdFacebook />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-orange-500
        duration-300 "
          >
            <BsInstagram />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-orange-500
        duration-300 "
          >
            <BsYoutube />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-orange-500
        duration-300 "
          >
            <BsTwitter />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-orange-500
        duration-300 "
          >
            <BsLinkedin />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
