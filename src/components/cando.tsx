import React from "react";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import { LuMonitorCheck } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdOnDeviceTraining } from "react-icons/md";

import Card from "./card.tsx";
export default function CanDo() {
    
    return (
        <div className="items-center flex flex-col p-6">
            <div className=" text-center flex flex-row h-fit m-5">
                <p className=" font-semibold text-5xl mr-4">What </p>
                <p className=" text-cyan-300 font-semibold text-5xl">we can do</p>

            </div>
            <div className="h-screen flex flex-col ">
                <div className="h-fit md:grid md:grid-cols-3 md:gap-5 lg:px-20 mb-10 flex flex-col ">
                    <Card Icon={FaBullseye} Title="Customer’s Requirements Managed By Help Desk Software." isDarkCard={true} Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={LuMonitorCheck} Title="Customer’s Requirements Managed By Help Desk Software." isDarkCard={false} Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={RiCustomerService2Fill} Title="Customer’s Requirements Managed By Help Desk Software." isDarkCard={true} Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                </div>
                <div className="h-fit md:grid md:grid-cols-3 md:gap-5 lg:px-20 mb-10 flex flex-col ">
                    <Card Icon={TbSettingsAutomation} Title="Customer’s Requirements Managed By Help Desk Software." isDarkCard={false} Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={MdOutlineStackedBarChart} Title="Customer’s Requirements Managed By Help Desk Software." isDarkCard={true} Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={MdOnDeviceTraining} Title="Customer’s Requirements Managed By Help Desk Software." isDarkCard={false} Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>

                </div>
            </div>
        </div>
    )
}