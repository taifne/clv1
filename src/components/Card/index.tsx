import React from "react";
import Icons from "./icons.tsx";
export default function Card({ isDarkCard, Title, Content, Icon }) {
    const lightStyles = {
        backgroundColor: '#F5F5F5',
        color: '#17325A',
    };

    const darkStyles = {
        backgroundColor: '#07244F',
        color: '#ffffff',
    };
    const cardStyles = isDarkCard ? darkStyles : lightStyles;

    return (
        <div style={cardStyles} className="p-x h-117 flex flex-col items-center rounded-xl mb-7">
            <div className="icon justify-items-center p-4 mb-5">
                <Icons Icon={Icon}></Icons>
            </div>
            <div className="title mb-5 w-full px-4 text-xl font-semibold">
                <p className="text-start">{Title}</p>
            </div>
            <div className="content w-full px-4 text"><p className="text-start">{Content}</p></div>

        </div>
    )
}