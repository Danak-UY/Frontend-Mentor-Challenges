import React from "react";

const Tag = ({ text = "blank" }) => {
  return (
    <span className="p-2 my-2 mr-2 lg:ml-2 text-sm text-primary bg-cyan-veryLightGraysh rounded font-bold cursor-pointer hover:text-white hover:bg-primary transition-colors duration-300 ease select-none capitalize">
      {text}
    </span>
  );
};

export default Tag;
