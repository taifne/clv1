import React from "react";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import { LuMonitorCheck } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdOnDeviceTraining } from "react-icons/md";

import Card from "../Card/index.tsx";
export default function CanDo() {

    return (
        <div className="items-center flex flex-col p-6 ">
            <div className=" text-center flex flex-row h-fit m-5">
                <p className=" font-semibold lg:text-5xl text-3xl mr-4">What </p>
                <p className=" text-cyan-300 font-semibold lg:text-5xl text-3xl">we can do</p>

            </div>
            <div className="h-fit flex flex-col ">
                <div className="h-fit md:grid md:grid-cols-3 md:gap-5 lg:px-20 mb-10 flex flex-col ">
                    <Card Icon={FaBullseye} Title="Customer’s Requirements Managed By Help Desk Software." isDarkCard={true} Content="Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize." ></Card>
                    <Card Icon={LuMonitorCheck} Title="Deliver On SLAs" isDarkCard={false} Content="Nail your Service Level Agreements, every time. Get the important things done first with prioritized queues." ></Card>
                    <Card Icon={RiCustomerService2Fill} Title="Offer Self-Service
" isDarkCard={true} Content="Help customers help themselves, scale support with a limited staff. Save time and reduce tickets with an integrated knowledge base." ></Card>
                </div>
                <div className="h-fit md:grid md:grid-cols-3 md:gap-5 lg:px-20 mb-10 flex flex-col ">
                    <Card Icon={TbSettingsAutomation} Title="Automate Those Repetitive Tasks" isDarkCard={false} Content="We always try to set up automations for the routine tasks so that we can focus on solving the important stuff and help lighten the workload." ></Card>
                    <Card Icon={MdOutlineStackedBarChart} Title="Customer’s Requirements Tracked And Reported On Metrics" isDarkCard={true} Content="We definitely keep an eye on key operational metrics like most IT organizations. But we’ve stopped obsessing over random KPIs, and we’re way more focused now on measuring what matters most. To summarize, we put the customer experience first, and spend our time drilling into the trends and numbers that can help us make the biggest improvements." ></Card>
                    <Card Icon={MdOnDeviceTraining} Title="Up-To-Date Staff Training" isDarkCard={false} Content="
CLV helpdesk’s tool is always available with the up to date workaround, training materials, guideline document, FAQ from users… We had a clear plan to make sure all of helpdesk team members could have the easiest way to reach them in the fastest way when they need to." ></Card>

                </div>
            </div>
        </div>
    )
}