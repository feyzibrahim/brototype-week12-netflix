import React from "react";

function HomeRows({ title, para, img, video, leftAlign }) {
  return (
    <div
      className={`lg:flex lg:items-center text-center lg:text-left border-zinc-800 border-b-8 pt-14 pb-20 px-10 lg:px-40 ${
        leftAlign && "lg:flex-row-reverse"
      }`}
    >
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold mb-5">{title}</h1>
        <h3 className="text-lg lg:text-2xl">{para}</h3>
      </div>
      <div className="lg:w-1/2 relative">
        <img src={img} alt="Some Images" className="-z-10" />
        {video}
      </div>
    </div>
  );
}

export default HomeRows;
