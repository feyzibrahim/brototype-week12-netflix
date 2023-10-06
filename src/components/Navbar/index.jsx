import React from "react";
import netflixLogo from "/netflix.svg";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 lg:px-36 pt-5 z-10">
      <img src={netflixLogo} alt="adfas" className="w-1/5 lg:w-1/6" />
      <div>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <Button text="Sign In" />
      </div>
      {/* <h1 className="text-9xl font-bold ">Hello world</h1> */}
    </nav>
  );
};

export default Navbar;
