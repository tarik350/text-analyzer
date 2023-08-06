import React from "react";
import { useSelector } from "react-redux";

const CountFooter = () => {
  const longestWord = useSelector((state) => state.text.longestWord);
  const avarageReadingTime = useSelector(
    (state) => state.text.avarageReadingTime
  );
  return (
    <div className="small-box px-[100px] mt-4">
      <div className="flex  items-center">
        <p className="px-2 text-gray-500">Avarage reading Time:</p>
        <div className="font-bolder text-[17px]">
          ~ {avarageReadingTime} minutes
        </div>
      </div>
      <div className="flex items-center">
        <p className="px-2 text-gray-500">Longest word:</p>
        <div>{longestWord}</div>
      </div>
    </div>
  );
};

export default CountFooter;
