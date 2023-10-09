import React from "react";

function InputHome({ inputRef, type, placeholder, id }) {
  return (
    <input
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      className="w-full rounded bg-zinc-900 bg-opacity-80 font-semibold border border-gray-500 px-7 py-3 z-10"
      ref={inputRef}
    />
  );
}

export default InputHome;
