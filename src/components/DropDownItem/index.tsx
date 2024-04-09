import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

interface DropdownProps {
  navItem: string;
  dropdownItems: string[];
}

const DropdownComponent: React.FC<DropdownProps> = ({ navItem, dropdownItems }) => (
  <div className="dropdown group md:w-1/4 order-3 md:order-1">
    <div className="dropdown-btn group-hover:text-blue-400 flex flex-row items-center md:justify-start justify-between w-full h-full px-0 py-2 pr-4">
      <p className="text-white font-semibold text-base md:text-sm lg:text-base xl:text-lg cursor-pointer">{navItem}</p>
      <FaAngleDown className="text-base font-thin ml-2 text-white"></FaAngleDown>
    </div>
    <div className="dropdown-content text-sm transition-all easy-in duration-150 h-0 group-hover:h-fit overflow-hidden text-white absolute bg-blue-950 group-hover:py-2 px-4 group-hover:border group-hover:border-x-zinc-50 ml-0">
      {dropdownItems.map((item, index) => (
        <p key={index} className="hover:text-blue-400 my-2 cursor-pointer">{item}</p>
      ))}
    </div>
  </div>
);

export default DropdownComponent;
