import React from "react";
import Icons from "./icons.tsx";
export default function Card({ backgroundColor, Title, Content,Icon }) {
    return (
        <div style={{ backgroundColor: backgroundColor }} className="p-3 flex flex-col items-center">
            <div className="icon justify-items-center"> 
            <Icons  Icon={Icon}></Icons>
            </div>
            <div className="title">
                <p className="">{Title}</p>
            </div>
            <p>{Content}</p>
        </div>
    )
}