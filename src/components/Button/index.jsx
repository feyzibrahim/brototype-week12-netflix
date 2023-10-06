import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded">
      {text}
    </button>
  );
};

export default Button;
