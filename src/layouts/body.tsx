import React from "react"
export default function MainContent() {
    return (
        <>
            <div className="h-fit  pt-32 md:grid md:grid-cols-2 md:px-0 md:pt-32 gap-6 lg:px-32 lg-pt-32 sm:flex sm:flex-col ">

                <div className="md:grid-span-1 md:h-2/3 h-96  iframe-container sm:w-full px-5 sm:pt-4 mb-2">
                    <iframe
                        className=" responsive-iframe h-full"
                        src="https://www.youtube.com/embed/iOF6cnzQeKw"
                        title="Embedded Content"
                        allowFullScreen

                    />
                </div>
                <div className="introduction md:grid-span-1 sm:p-2 sm:w-full px-5">
                    <p className="md:text-5xl text-left font-normal mb-1 text-3xl">Create a Global Support Hub with</p>
                    <p className="md:text-5xl text-left font-normal text-cyan-500 mb-3 text-3xl">Global Service Desk</p>
                    <p className="text-left  md:text-xl text-sm">We play the roles as the support
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