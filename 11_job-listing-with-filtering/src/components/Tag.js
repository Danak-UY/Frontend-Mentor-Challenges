import React from "react";
import { useDispatch } from "react-redux";

const Tag = ({ text = "blank" }) => {
  const dispatch = useDispatch();
  function addFilter(ev) {
    dispatch({
      type: "FILTER_BY_TAGS",
      payload: ev.target.innerText,
    });
  }
  return (
    <span
      className="p-2 my-2 mr-2 lg:ml-2 text-sm text-primary bg-cyan-veryLightGraysh rounded font-bold cursor-pointer hover:text-white hover:bg-primary transition-colors duration-300 ease select-none capitalize"
      onClick={addFilter}
    >
      {text}
    </span>
  );
};

export default Tag;
