import React from "react";

const Button = ({ text, linkTo }) => {
  return (
    <a
      className="bg-red-600 text-white font-semibold px-3 py-1 rounded"
      href={linkTo}
    >
      {text}
    </a>
  );
};

export default Button;
