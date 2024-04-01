import React from "react"
export default function MainContent() {
    return (
        <>
            <div className="h-screen grid grid-cols-2 md:px-32 md:py-40 gap-4">
                <div className="grid-span-1 h-3/5">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/rNjUDw5E6tY">
                    </iframe>

                </div>
                <div className="introduction grid-span-1 p-2">
                    <p className="text-5xl text-left font-normal">Create a Global Support Hub with</p>
                    <p className="text-5xl text-left font-normal text-blue-400">Global Service Desk</p>
                    <p className="text-left pr-20 text-xl">We play the roles as the support
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