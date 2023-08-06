import React from "react";

const Footer = () => {
  return (
    <div className="w-full items-center absolute bottom-0  px-[270px] bg-secondary  h-[70px] shadow-md flex justify-between ">
      <p className="text-[20px] font-normal  ">built by Tarik Teshome</p>
      <div className="flex items-center">
        <a className="text-[20px] font-normal" href="#">
          About
        </a>
        <div className="mx-2 w-[3px] h-[20px] bg-black"></div>
        <a className="text-[20px] font-normal" href="#">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Footer;
