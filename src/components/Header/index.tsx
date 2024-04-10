import React, { useEffect, useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import Burger from "../Button/index.tsx";
import { breakpoints } from "../../config/BreakPoints.ts";
const logo =require('../../assets/images/CLT_Logo-W.png'); 
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
      if (window.innerWidth < breakpoints.medium) {
        setNavHidden(true);

        document.addEventListener("mousedown", handleClickOutside);
      } else {
        setNavHidden(false);
        document.removeEventListener("mousedown", handleClickOutside);
      }
    });
  }, []);

  return (
    <div ref={navRef} className="md:grid-cols-9 md:grid bg-blue-950  md:h-20  md:items-center md:justify-center fixed md:w-full z-10 flex flex-col-reverse items-start w-full">
      <div className="nav-logo min-w-fit md:col-span-3 text-white md:h-full my-1 order-last flex flex-row justify-between w-full p-3 md:order-1">
        <a className=" hover:cursor-pointer md:flex md:flex-col md:items-center md:justify-center md:w-5/6 ">
        <img src={logo} className="h-12 w-28" />

        </a>
        <Burger onClick={burgerToggle} navHidden={navHidden} />
      </div>
      <div className={navHidden ? "hidden" : "block" + " nav-content md:col-span-4  md:flex md:flex-row p-2 flex flex-col md:order-2 my-1 w-full "}>
        <div className="dropdown group md:w-1/4 order-3 md:order-1 min-w-fit">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center md:justify-start justify-between w-full   h-full px-0 py-2 pr-4">
            <a href="#" className="hover:text-blue-300 text-white font-semibold text-base md:text-sm lg:text-base xl:text-lg cursor-pointer">Solutions</a>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div  className="dropdown-content text-sm transition-all easy-in duration-350 h-0 group-hover:h-fit overflow-hidden text-white absolute bg-blue-950 group-hover:py-2 px-4 group-hover:border group-hover:border-x-zinc-50  ml-0  ">
            <div className="w-[18rem] sm:w-[34rem] md:w-48 px-1 py-2 flex flex-col items-start">
              <p className="underline  font-semibold hover:text-blue-400 cursor-pointer">
                Overview
              </p>
              <div className="ml-4 flex flex-col items-start">
                <p className="hover:text-blue-400 my-2 cursor-pointer">Forwarding</p>
                <p className="hover:text-blue-400 my-2 cursor-pointer">Container Tracking</p>
                <p className="hover:text-blue-400 my-2 cursor-pointer">Shipping</p>
                <p className="hover:text-blue-400 my-2 cursor-pointer">Factory</p>
              </div></div>


          </div>
        </div>
        <div className="dropdown group md:w-1/4 order-2 md:order-2 min-w-fit">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center md:justify-start justify-between w-full  h-full px-0 py-2 pr-4">
            <a href="#" className="hover:text-blue-300  text-white font-semibold text-base md:text-sm lg:text-base xl:text-lg cursor-pointer">Services</a>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content text-sm transition-all easy-in duration-150 h-0 group-hover:h-fit overflow-hidden text-white absolute bg-blue-950 group-hover:py-2 px-4 group-hover:border group-hover:border-x-zinc-50  ml-0 ">
            <div className="w-[18rem] sm:w-[34rem] md:w-48 px-1 py-2 flex flex-col items-start">
              <p className="underline  font-semibold hover:text-blue-400 cursor-pointer">
                Overview
              </p>
              <div className="ml-4 flex flex-col items-start">
                <p className="hover:text-blue-400 my-2 cursor-pointer">Software Deverlopment</p>
                <p className="hover:text-blue-400 my-2 cursor-pointer">Quality Asureance</p>
                <p className="hover:text-blue-400 my-2 cursor-pointer">Global Service Desk</p>

              </div></div>


          </div>
        </div>
        <div className="dropdown group md:w-1/4 order-4 md:order-3 min-w-fit">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center md:justify-start justify-between w-full  h-full px-0 py-2 pr-4">
            <a href="#" className="hover:text-blue-300 text-white font-semibold text-base md:text-sm lg:text-base xl:text-lg cursor-pointer">Careers </a>
            <FaAngleDown className="text-base font-thin text-white ml-2"></FaAngleDown>
          </div>
          <div className="dropdown-content text-sm transition-all easy-in duration-150 h-0 group-hover:h-fit overflow-hidden text-white absolute bg-blue-950 group-hover:py-2 px-4 group-hover:border group-hover:border-x-zinc-50  ml-0">
            <div className="w-[18rem] sm:w-[34rem] md:w-48 px-1 py-2 flex flex-col items-start">
              <p className="underline  font-semibold hover:text-blue-400 cursor-pointer">
                Overview
              </p>
              <div className="ml-4 flex flex-col items-start">
                <p className="hover:text-blue-400 my-2 cursor-pointer">Experienced Hire</p>
                <p className="hover:text-blue-400 my-2 cursor-pointer">Fresher Training Program</p>

              </div></div>


          </div>
        </div>

        <div className="dropdown group md:w-1/4 md:order-4 flex items-center min-w-fit">


          <p className="cursor-pointer text-white font-semibold  hover:text-cyan-400 w-fit rounded-md md:px-2 py-1 text-base md:text-sm lg:text-sm xl:text-base">About Us</p>


        </div>

      </div>
      <div className={navHidden ? "hidden" : "block" + "nav-contact md:col-span-2 md:flex md:items-center md:justify-center my-1 pl-1 md:order-3"}>
        <button className="cursor-pointer md:px-2  text-base md:text-sm lg:text-sm xl:text-base px-2 py-1 text-blue-900 rounded-md font-semibold hover:bg-cyan-300 md:text-blue-950 md:hover:text-white bg-white">Contact us</button>
      </div>
    </div>
  );
}