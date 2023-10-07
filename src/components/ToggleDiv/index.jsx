import React, { useState } from "react";
import { BsPlusLg, BsXLg } from "react-icons/bs";

function ToggleDiv({ title, paraOne, paraTwo }) {
  let [isClick, setIsClick] = useState(false);

  return (
    <div className="mx-10 lg:mx-40 mb-3">
      <div
        className="flex items-center justify-between px-5 py-7 bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
        onClick={() => setIsClick(!isClick)}
      >
        <h1 className="text-lg lg:text-2xl">{title}</h1>
        {isClick ? (
          <BsXLg className="font-bold text-xl lg:text-3xl" />
        ) : (
          <BsPlusLg className="font-bold text-xl lg:text-3xl" />
        )}
      </div>
      {isClick && (
        <div className="bg-zinc-800 mt-1 py-7 px-5">
          <p className="text-lg lg:text-2xl mb-5">{paraOne}</p>
          <p className="text-lg lg:text-2xl">{paraTwo}</p>
        </div>
      )}
    </div>
  );
}

export default ToggleDiv;
