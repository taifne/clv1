import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface BurgerProps {
  onClick: () => void;
  navHidden: boolean;
}

const Burger: React.FC<BurgerProps> = ({ onClick, navHidden }) => {
  return (
    <button
      className="md:hidden block p-2 border-2 border-gray-200 rounded-md hover:bg-gray-200 w-10 h-10"
      onClick={onClick}
    >
      <GiHamburgerMenu className={navHidden ? "rotate-0" : "rotate-90"} />
    </button>
  );
};

export default Burger;
