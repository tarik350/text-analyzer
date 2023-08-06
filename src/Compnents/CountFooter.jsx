import React from "react";

const CountFooter = () => {
  return (
    <div className="small-box px-[150px] mt-4">
      <div className="flex  items-center">
        <p className="px-2 text-gray-500">Avarage reading Time:</p>
        <div className="w-[15px] h-[2px] bg-black "></div>
      </div>
      <div className="flex items-center">
        <p className="px-2 text-gray-500">Longest word:</p>
        <div className="w-[15px] h-[2px] bg-black "></div>
      </div>
    </div>
  );
};

export default CountFooter;
