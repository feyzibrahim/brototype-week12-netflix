import React from "react";
import netflixLogo from "/netflix.svg";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarAfterLogin = () => {
  return (
    <nav className="flex items-center px-5 lg:px-12 pt-5 z-40 absolute w-full">
      <img src={netflixLogo} alt="adfas" className="w-1/5 lg:w-1/6" />
      <div className="flex-grow px-5 lg:flex gap-5 hidden ">
        <Link to="/user" className="navbar-a">
          Home
        </Link>
        <Link to="/user" className="navbar-a">
          TV Shows
        </Link>
        <Link to="/user" className="navbar-a">
          Movies
        </Link>
        <Link to="/user" className="navbar-a">
          New & Popular
        </Link>
        <Link to="/user" className="navbar-a">
          My List
        </Link>
      </div>
      <div className="flex items-center gap-5 text-xl">
        <Link to="/user" className="navbar-a">
          <BiSearchAlt />
        </Link>
        <Link to="/user" className="navbar-a">
          <span>DVD</span>
        </Link>
        <Link to="/user" className="navbar-a">
          <MdNotificationsNone />
        </Link>
        <Link to="/user" className="navbar-a">
          <BiUser />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarAfterLogin;
