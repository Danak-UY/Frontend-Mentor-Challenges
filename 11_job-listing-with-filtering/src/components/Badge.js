import React from "react";

const Badge = ({ text = "blank", color = "primary" }) => {
  return (
    <span
      className={`${color} bg-primary text-white uppercase rounded-full p-2 mx-2 font-bold text-xs leading-none align-middle select-none`}
    >
      {text}
    </span>
  );
};

export default Badge;
