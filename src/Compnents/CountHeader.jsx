import React from "react";
import { useSelector } from "react-redux";

const CountHeader = () => {
  const text = useSelector((state) => state.text);
  //   console.log(text);
  return (
    <div className="small-box mt-[50px]  px-6">
      <div className="align-center">
        <p className="text-gray-500">words</p>
        <span className="font-bold text-xl">{text.words}</span>
      </div>
      <div className="align-center">
        <p className="text-gray-500">character</p>
        <span className="font-bold text-xl">{text.characters}</span>
      </div>{" "}
      <div className="align-center">
        <p className="text-gray-500">sentence</p>
        <span className="font-bold text-xl">{text.sentences}</span>
      </div>{" "}
      <div className="align-center">
        <p className="text-gray-500">paragraph</p>
        <span className="font-bold text-xl">{text.paragraphs}</span>
      </div>{" "}
      <div className="align-center">
        <p className="text-gray-500">pronouns</p>
        <span className="font-bold text-xl">{text.pronouns}</span>
      </div>
    </div>
  );
};

export default CountHeader;
