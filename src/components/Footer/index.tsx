import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className=" border-y-2 py-10 px-20 flex flex-row justify-evenly w-full">
            <div className="container mx-auto flex md:flex-row md:justify-between md:items-center flex-col-reverse justify-center items-center">
                <div className="flex">
                    <FaFacebook className="m-3 text-4xl text-blue-500"/>
                    <FaYoutube className="m-3 text-4xl text-red-600"/>
                </div>
                <div className="flex md:flex-row flex-col">
                    <p className="m-3 uppercase font-semibold ">Contact Us</p>
                    <p className="m-3 uppercase font-semibold">Join Us</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
