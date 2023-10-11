import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, linkTo }) => {
  return (
    <Link
      className="bg-red-600 text-white font-semibold px-3 py-1 rounded"
      to={linkTo}
    >
      {text}
    </Link>
  );
};

export default Button;
