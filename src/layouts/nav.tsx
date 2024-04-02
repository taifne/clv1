import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
export default function Nav() {
  let [navHidden,setNavHidden] =useState(false);
  let burgerToggle=()=>{
    setNavHidden(!navHidden);
  }
  useEffect(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            setNavHidden(true);
        } else {
            setNavHidden(false);
        }
        console.log(window.innerWidth);
    });
}, []);
  return (
    <div className="md:grid-cols-7 md:grid bg-blue-950  md:h-20  md:items-center md:justify-center fixed md:w-full z-10 flex flex-col-reverse items-start w-full ">
      <div className="nav-logo md:col-span-2 text-white md:h-full mt-4 order-last flex flex-row justify-between w-full p-3 md:order-1">
        <a className=" hover:cursor-pointer md:flex md:flex-col md:items-center md:justify-center">
          <p className="text-xl font-semibold">CyberLogitec</p>
          <p className="ml-20 text-xs font-thin">V I E T N A M</p>
         
        </a>
        <button className="md:hidden block p-2 border-2 border-gray-200 rounded-md hover:bg-gray-200 w-10 h-10 "  onClick={burgerToggle}> <GiHamburgerMenu className={navHidden?"rotate-90":"rotate-0"} /></button>
      </div>
      <div className={navHidden?"hidden":"block"+"nav-content md:col-span-3 md:flex md:flex-row p-2 flex flex-col md:order-2"}>
        <div className="dropdown group md:basis-1/4 order-3 md:order-1">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center justify-start h-full px-0 py-2">
            <p className="text-white font-semibold">Solutions</p>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content text-sm hidden group-hover:block text-white absolute bg-blue-950 py-2 px-4 border border-x-zinc-50 ml-6">
            <div className="w-48 px-1 py-2 flex flex-col items-start">
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
        <div className="dropdown group md:basis-1/4 order-2 md:order-2">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center justify-start h-full px-0 py-2 ">
            <p className="text-white font-semibold">Services</p>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content text-sm hidden group-hover:block text-white absolute bg-blue-950 p-2 border border-x-zinc-50 ml-6">
            <div className="w-48 px-1 py-2 flex flex-col items-start">
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
        <div className="dropdown group md:basis-1/4 order-4 md:order-3">
          <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center justify-start h-full px-0 py-2">
            <p className="text-white font-semibold">Careers</p>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content text-sm  hidden group-hover:block text-white absolute bg-blue-950 p-2 border border-x-zinc-50 ml-6">
            <div className="w-48 px-1 py-2 flex flex-col items-start">
              <p className="underline  font-semibold hover:text-blue-400">
                Overview
              </p>
              <div className="ml-4 flex flex-col items-start">
                <p className="hover:text-blue-400 my-2">Experienced Hire</p>
                <p className="hover:text-blue-400 my-2">Fresher Training Program</p>

              </div></div>


          </div>
        </div>

        <div className="dropdown group md:basis-1/4 md:order-4 flex items-center">


          <p className="text-white font-semibold  hover:text-cyan-400 w-fit rounded-md md:px-2 py-1">About Us</p>


        </div>

      </div>
      <div className={navHidden?"hidden":"block"+"nav-contact md:col-span-2 md:flex md:items-center md:justify-center mt-2 pl-1 md:order-3"}>
        <button className="px-2 py-1 text-white rounded-md font-semibold md:text-blue-950 md:hover:text-white bg-cyan-300 hover:scale-110">Contact us</button>
      </div>
    </div>
  );
}