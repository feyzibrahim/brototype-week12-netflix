import React from "react";
import { BsChevronRight } from "react-icons/bs";

const ArrowButton = ({ text, clickHandler }) => {
  return (
    <button
      className="bg-red-600 lg:w-96 flex justify-between items-center gap-5 text-white text-2xl font-bold px-7 py-3 rounded"
      onClick={clickHandler}
    >
      {text}
      <BsChevronRight />
    </button>
  );
};

export default ArrowButton;
