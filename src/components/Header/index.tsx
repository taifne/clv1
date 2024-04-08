import React, { useEffect, useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [navHidden, setNavHidden] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const burgerToggle = () => {
    setNavHidden(!navHidden);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setNavHidden(true);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setNavHidden(true);

        document.addEventListener("mousedown", handleClickOutside);
      } else {
        setNavHidden(false);
        document.removeEventListener("mousedown", handleClickOutside);
      }
    });
  }, []);

  return (
    <div ref={navRef} className="md:grid-cols-8 md:grid bg-blue-950  md:h-24  md:items-center md:justify-center fixed md:w-full z-10 flex flex-col-reverse items-start w-full ">
      <div className="nav-logo md:col-span-3 text-white md:h-full my-4 order-last flex flex-row justify-between w-full p-3 md:order-1">
        <a className=" hover:cursor-pointer md:flex md:flex-col md:items-center md:justify-center md:w-5/6 ">
          <p className="text-3xl font-semibold">CyberLogitec</p>
          <p className="ml-20 text-xs font-thin">V I E T N A M</p>

        </a>
        <button className="md:hidden block p-2 border-2 border-gray-200 rounded-md hover:bg-gray-200 w-10 h-10 " onClick={burgerToggle}> <GiHamburgerMenu className={navHidden ? "rotate-0" : "rotate-90"} /></button>
      </div>
      <div className={navHidden ? "hidden" : "block" + "nav-content md:col-span-3  md:flex md:flex-row p-2 flex flex-col md:order-2  w-full"}>
        <div className="dropdown group md:w-1/4 order-3 md:order-1">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center md:justify-start justify-between w-full pr-1 md:w-4/5 h-full px-0 py-2 pr-4">
            <p className="text-white font-semibold text-base md:text-sm lg:text-base xl:text-lg">Solutions</p>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content text-sm hidden group-hover:block text-white absolute bg-blue-950 py-2 px-4 border border-x-zinc-50  ml-0  ">
            <div className="w-96 md:w-48 px-1 py-2 flex flex-col items-start">
              <p className="underline  font-semibold hover:text-blue-400">
                Overview
              </p>
              <div className="ml-4 flex flex-col items-start">
                <p className="hover:text-blue-400 my-2">Forwarding</p>
                <p className="hover:text-blue-400 my-2">Container Tracking</p>
                <p className="hover:text-blue-400 my-2">Shipping</p>
                <p className="hover:text-blue-400 my-2">Factory</p>
              </div></div>


          </div>
        </div>
        <div className="dropdown group md:w-1/4 order-2 md:order-2">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center md:justify-start justify-between w-full md:w-4/5 h-full px-0 py-2 pr-4">
            <p className="text-white font-semibold text-base md:text-sm lg:text-base xl:text-lg">Services</p>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content text-sm hidden group-hover:block text-white absolute bg-blue-950 p-2 border border-x-zinc-50 ml-0 ">
            <div className="w-96 md:w-48  px-1 py-2 flex flex-col items-start">
              <p className="underline  font-semibold hover:text-blue-400">
                Overview
              </p>
              <div className="ml-4 flex flex-col items-start">
                <p className="hover:text-blue-400 my-2">Software Deverlopment</p>
                <p className="hover:text-blue-400 my-2">Quality Asureance</p>
                <p className="hover:text-blue-400 my-2">Global Service Desk</p>

              </div></div>


          </div>
        </div>
        <div className="dropdown group md:w-1/4 order-4 md:order-3 ">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center md:justify-start justify-between w-full md:w-4/5 h-full px-0 py-2 pr-4">
            <p className="text-white font-semibold text-base md:text-sm lg:text-base xl:text-lg">Careers </p>
            <FaAngleDown className="text-base font-thin text-white ml-2"></FaAngleDown>
          </div>
          <div className="dropdown-content text-sm  hidden group-hover:block text-white absolute bg-blue-950 p-2 border border-x-zinc-50 ml-0 ">
            <div className="w-96 md:w-48  px-1 py-2 flex flex-col items-start">
              <p className="underline  font-semibold hover:text-blue-400">
                Overview
              </p>
              <div className="ml-4 flex flex-col items-start">
                <p className="hover:text-blue-400 my-2">Experienced Hire</p>
                <p className="hover:text-blue-400 my-2">Fresher Training Program</p>

              </div></div>


          </div>
        </div>

        <div className="dropdown group md:w-1/4 md:order-4 flex items-center ">


          <p className="text-white font-semibold  hover:text-cyan-400 w-fit rounded-md md:px-2 py-1 text-base md:text-sm lg:text-base xl:text-lg">About Us</p>


        </div>

      </div>
      <div className={navHidden ? "hidden" : "block" + "nav-contact md:col-span-2 md:flex md:items-center md:justify-center mt-2 pl-1 md:order-3"}>
        <button className=" text-base md:text-lg lg:text-base xl:text-lg px-2 py-1 text-blue-900 rounded-md font-semibold hover:bg-cyan-300 md:text-blue-950 md:hover:text-white bg-white ">Contact us</button>
      </div>
    </div>
  );
}