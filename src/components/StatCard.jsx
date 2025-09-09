import React from "react";
import { ChevronRight } from "lucide-react";

const StatCard = ({ title, value, message, icon: Icon, iconBg, iconColor, iconSize }) => {
  return (
    <div
      className="
    group bg-white shadow-md rounded-xl p-3 flex flex-col md:flex-row 
    md:items-center md:justify-between gap-3 
    transition-all duration-300 ease-in-out 
    hover:scale-105
    hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600
    hover:shadow-2xl hover:shadow-green-500
  "
    >
      <div className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center rounded-full bg- group-hover:bg-white transition-colors">
        <ChevronRight className="w-3 h-3 text-white group-hover:text-black" />
      </div>
      <div className="text-center md:text-left flex-1">
        <h4 className="text-gray-500 text-md font-medium transition-colors group-hover:text-white duration-300">
          {title}
        </h4>
        <p className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 ">
          {value}
        </p>
        <p className="text-xs font-sm text-gray-500 group-hover:text-white transition-colors duration-300  ">
          {message}
        </p>
      </div>

      {Icon && (
        <div
          className={`
            w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full 
            mx-auto md:mx-0 ${iconBg}  ${iconSize || "w-7 h-7"}
            transition-all duration-300 ease-in-out group-hover:bg-white
          `}
        >
          <Icon className={`w-7 h-7 md:w-8 md:h-8 ${iconColor} group-hover:text-green-500`} />
        </div>
      )}
    </div>
  );
};

export default StatCard;
