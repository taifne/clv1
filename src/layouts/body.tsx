import React from "react"
export default function MainContent() {
    return (
        <>
            <div className="h-fit pt-32 md:grid md:grid-cols-2 md:px-0 md:pt-32 gap-6 lg:px-32 lg-pt-32 sm:flex sm:flex-col ">

                <div className="md:grid-span-1 h-2/3 iframe-container sm:w-full px-5">
                    <iframe
                        className=" responsive-iframe"
                        src="https://www.youtube.com/embed/rNjUDw5E6tY"
                        title="Embedded Content"
                        allowFullScreen

                    />
                </div>
                <div className="introduction md:grid-span-1 sm:p-2 sm:w-full px-5">
                    <p className="text-5xl text-left font-normal">Create a Global Support Hub with</p>
                    <p className="text-5xl text-left font-normal text-cyan-300">Global Service Desk</p>
                    <p className="text-left pr-16 text-xl">We play the roles as the support
                        frontiers and the representatives of the IT support.
                        The Global Service Desk is the center where customers
                        (e.g. employees or other stakeholders) can
                        approach for help from their IT service providers.
                        Regardless of whatever the assistance is being provided,
                        the goal of our Global Service Desk is to deliver high-quality service
                        to customers in the timely manner.</p>
                </div>
            </div>
        </>
    )
}