import React from "react";

import Tag from "./Tag";

const TagFilter = ({ text }) => {
  return (
    <div className="flex items-center my-2 mr-4 pl-3 text-sm text-primary bg-cyan-veryLightGraysh rounded font-bold ease select-none capitalize">
      <span className="mr-3">{text}</span>
      <span className="py-2 px-3 bg-primary cursor-pointer rounded-r hover:bg-cyan-veryDarkGraysh transition-color duration-300 ease">
        <img
          src="https://image.flaticon.com/icons/svg/1828/1828774.svg"
          alt="Close icon"
          className="w-4 inline"
          style={ImageStyles}
        />
      </span>
    </div>
  );
};

const ImageStyles = {
  filter: "invert(1)",
};

export default TagFilter;
