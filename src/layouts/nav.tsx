import React from "react";
import { FaAngleDown } from "react-icons/fa";
export default function Nav() {
  return (
    <div className="md:grid-cols-7 md:grid bg-blue-950  md:h-20  items-center justify-center fixed w-full">
      <div className="nav-logo md:col-span-2 text-white md:h-full mt-4">
        <a className=" hover:cursor-pointer md:flex md:flex-col md:items-center md:justify-center">
          <p className="text-xl font-semibold">CyberLogitec</p>
          <p className="ml-20 text-xs font-thin">V I E T N A M</p>
        </a>
      </div>
      <div className="nav-content md:col-span-3 md:flex md:flex-row">
        <div className="dropdown group md:basis-1/4">
          <div className="dropdown-btn group-hover:text-blue-400 md:flex md:flex-row md:items-center md:justify-center h-full">
            <p className="text-white font-semibold">Solutions</p>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content  hidden group-hover:block text-white absolute bg-blue-950 p-2 border border-x-zinc-50">
            <div className="w-48 px-1 py-2">
              <p className="underline justify-self-start font-semibold hover:text-blue-400">
                Overview
              </p>
              <div className="ml-8 flex flex-col items-start justify-start">
                <p className="hover:text-blue-400">Forwarding</p>
                <p className="hover:text-blue-400">Container Tracking</p>
                <p className="hover:text-blue-400">Shipping</p>
                <p className="hover:text-blue-400">Factory</p>
              </div></div>


          </div>
        </div>
        <div className="dropdown group md:basis-1/4">
          <div className="dropdown-btn group-hover:text-blue-400 md:flex md:flex-row md:items-center md:justify-center">
            <p className="text-white font-semibold">Services</p>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content hidden group-hover:block text-white absolute bg-blue-950 p-2 border border-x-zinc-50">
            <div className="w-48 px-1 py-2">
              <p className="underline justify-self-start font-semibold hover:text-blue-400">
                Overview
              </p>
              <div className="ml-3 flex flex-col items-start justify-start">
                <p className="hover:text-blue-400">Software Development</p>
                <p className="hover:text-blue-400">Quality Asurerance </p>
                <p className="hover:text-blue-400">Global Service Desk</p>
              </div></div>


          </div>
        </div>
        <div className="dropdown group md:basis-1/4">
          <div className="dropdown-btn group-hover:text-blue-400 md:flex md:flex-row md:items-center md:justify-center">
            <p className="text-white font-semibold">Careers</p>
            <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
          </div>
          <div className="dropdown-content hidden group-hover:block text-white absolute bg-blue-950 p-2 border border-x-zinc-50">
            <div className="w-48 px-1 py-2">
              <p className="underline justify-self-start font-semibold hover:text-blue-400">
                Overview
              </p>
              <div className="ml-2 flex flex-col items-start justify-start">
                <p className="hover:text-blue-400">Experienced Hire</p>
                <p className="hover:text-blue-400 text-sm">Fresher Trainning Program</p>
 
              </div></div>


          </div>
        </div>
        <div className="dropdown group md:basis-1/4">
   

<p className="hover:text-blue-400 text-white font-semibold">About Us</p>

      
        </div>

      </div>
      <div className="nav-contact md:col-span-2 md:flex md:items-center md:justify-center">
        <button className="px-4 py-1 rounded-md font-semibold text-blue-950 hover:text-white bg-white hover:bg-blue-400 font-normal">Contact us</button>
      </div>
    </div>
  );
}