import React from "react";

const CountHeader = () => {
  return (
    <div className="small-box mt-[50px]  px-6">
      <div className="align-center">
        <p className="text-gray-500">words</p>
        <span className="font-bold text-xl">0</span>
      </div>
      <div className="align-center">
        <p className="text-gray-500">character</p>
        <span className="font-bold text-xl">0</span>
      </div>{" "}
      <div className="align-center">
        <p className="text-gray-500">sentence</p>
        <span className="font-bold text-xl">0</span>
      </div>{" "}
      <div className="align-center">
        <p className="text-gray-500">paragraph</p>
        <span className="font-bold text-xl">0</span>
      </div>{" "}
      <div className="align-center">
        <p className="text-gray-500">pronounce</p>
        <span className="font-bold text-xl">0</span>
      </div>
    </div>
  );
};

export default CountHeader;
