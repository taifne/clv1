import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import Card from "./card.tsx";
export default function CanDo() {
    return (
        <div className="items-center flex flex-col p-10">
            <div className=" text-center flex flex-row h-fit m-5">
                <p className="text-blue-400 font-bold text-4xl mr-4">What </p>
                <p className="font-bold text-4xl">we can do</p>

            </div>
            <div className="h-screen flex flex-col ">
                <div className="h-4/5 grid grid-cols-3 gap-4 px-32 mb-10">
                    <Card Icon={FaBullseye} Title="Customer’s Requirements Managed By Help Desk Software." backgroundColor="#06234F" Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={FaAngleDown} Title="Customer’s Requirements Managed By Help Desk Software." backgroundColor="#F5F5F5" Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={FaAngleDown} Title="Customer’s Requirements Managed By Help Desk Software." backgroundColor="#06234F" Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                </div>
                <div className="h-4/5 grid grid-cols-3 gap-4 px-32 ">
                    <Card Icon={FaAngleDown} Title="Customer’s Requirements Managed By Help Desk Software." backgroundColor="#F5F5F5" Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={FaAngleDown} Title="Customer’s Requirements Managed By Help Desk Software." backgroundColor="#06234F" Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={FaAngleDown} Title="Customer’s Requirements Managed By Help Desk Software." backgroundColor="#F5F5F5" Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>

                </div>
            </div>
        </div>
    )
}