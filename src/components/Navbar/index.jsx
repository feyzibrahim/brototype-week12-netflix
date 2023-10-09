import React from "react";
import netflixLogo from "/netflix.svg";
import Button from "../Button";
import LanguageButton from "../LanguageButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 lg:px-36 pt-5 z-10">
      <img src={netflixLogo} alt="adfas" className="w-1/5 lg:w-1/6" />
      <div>
        <LanguageButton />
        <Button text="Sign In" linkTo="/login" />
      </div>
    </nav>
  );
};

export default Navbar;
