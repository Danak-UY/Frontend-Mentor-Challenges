import React from "react";
import { useDispatch } from "react-redux";

const TagFilter = ({ text }) => {
  const dispatch = useDispatch();

  function removeTag(ev) {
    dispatch({
      type: "REMOVE_FILTER_TAG",
      payload: ev.target.previousElementSibling.innerText,
    });
  }

  return (
    <div className="flex items-center my-2 mr-4 pl-3 text-sm text-primary bg-cyan-veryLightGraysh rounded font-bold ease select-none capitalize">
      <span className="mr-3">{text}</span>
      <span
        className="py-2 px-3 bg-primary cursor-pointer rounded-r hover:bg-cyan-veryDarkGraysh transition-color duration-300 ease"
        onClick={removeTag}
      >
        <img
          src="./images/close-icon.svg"
          alt="Close icon"
          className="w-4 inline select-none pointer-events-none"
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
