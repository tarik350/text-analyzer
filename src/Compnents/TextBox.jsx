import React from "react";

const TextBox = () => {
  return (
    <div>
      <textarea
        id="message"
        rows="4"
        class=" w-full h-[400px] text-xl p-4  bg-white  outline-none  "
        placeholder="paste something here..."
      ></textarea>
    </div>
  );
};

export default TextBox;
