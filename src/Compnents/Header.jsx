import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Header = () => {
  return (
    <div className="flex items-center px-[270px] bg-secondary  h-[70px] shadow-md justify-between">
      <h1 className=" font-medium text-[20px]">Text Analyzer</h1>
      <ul className="flex">
        <li>
          <AiFillGithub size={23} />
        </li>
        <li className="px-2">
          <AiFillLinkedin size={23} />
        </li>
        <li>
          <AiFillTwitterCircle size={23} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
