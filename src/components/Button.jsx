import React from "react";

const Button = ({ label, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
