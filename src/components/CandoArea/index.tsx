import React from "react";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import { LuMonitorCheck } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdOnDeviceTraining } from "react-icons/md";
import cardsData from '../../data/card-data.ts';

import Card from "../Card/Index.tsx";
export default function CanDo() {

    return (
        <div className="items-center flex flex-col p-6">
      <div className="text-center flex flex-row h-fit m-5">
        <p className="font-medium lg:text-5xl text-4xl mr-4">What</p>
        <p className="text-cyan-300 font-medium lg:text-5xl text-4xl">we can do</p>
      </div>
      <div className="h-fit flex flex-col">
        <div className="h-fit md:grid md:grid-cols-3 md:gap-5 lg:px-20 mb-10 flex flex-col">
        {cardsData.map(card => (
             <Card
             key={card.id}
             Icon={getIconComponent(card.Icon)}
             Title={card.Title}
             isDarkCard={card.isDarkCard}
             Content={card.Content}
           />
      ))}
        </div>
      </div>
    </div>
    )
}
const getIconComponent = (iconName: string): React.ElementType  =>{
    switch (iconName) {
      case 'FaBullseye':
        return FaBullseye;
      case 'LuMonitorCheck':
        return LuMonitorCheck;
      case 'RiCustomerService2Fill':
        return RiCustomerService2Fill;
      case 'TbSettingsAutomation':
        return TbSettingsAutomation;
      case 'MdOutlineStackedBarChart':
        return MdOutlineStackedBarChart;
      case 'MdOnDeviceTraining':
        return MdOnDeviceTraining;
      default:
        return FaBullseye;
    }
  };