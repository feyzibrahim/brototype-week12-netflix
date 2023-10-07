import React from "react";
import netflixLogo from "/netflix.svg";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 lg:px-36 pt-5 z-10">
      <img src={netflixLogo} alt="adfas" className="w-1/5 lg:w-1/6" />
      <div>
        <select className="rounded bg-zinc-900 bg-opacity-80 font-semibold border border-gray-500 text-white px-5 py-1 mr-3">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <Button text="Sign In" />
      </div>
    </nav>
  );
};

export default Navbar;
