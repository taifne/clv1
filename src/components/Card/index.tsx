import React, { ReactElement } from "react";
import Icons from "./Icon.tsx";
import { colorBackgroundDark, colorBackgroundLight, colorTextDark, colorTextLight } from "../../config/colors.ts";

interface CardProps {
  isDarkCard: boolean;
  Title: string;
  Content: string;
  Icon: React.ElementType;
}

export default function Card({ isDarkCard, Title, Content, Icon }: CardProps): ReactElement {
  const lightStyles: React.CSSProperties = {
    backgroundColor: colorBackgroundLight,
    color: colorTextDark,
  };

  const darkStyles: React.CSSProperties = {
    backgroundColor: colorBackgroundDark,
    color: colorTextLight,
  };

  const cardStyles: React.CSSProperties = isDarkCard ? darkStyles : lightStyles;

  return (
    <div style={cardStyles} className="h-80 sm:h-80 md:h-97 xl:h-117 flex flex-col items-center rounded-xl mb-7">
      <div className="icon justify-items-center p-3 mb-4">
        <Icons Icon={Icon}></Icons>
      </div>
      <div className="title mb-5 w-full px-4 text-xl font-semibold">
        <p className="text-start">{Title}</p>
      </div>
      <div className="content w-full px-3 text">
        <p className="text-start text-xs  xl:text-base">{Content}</p>
      </div>
    </div>
  );
}
