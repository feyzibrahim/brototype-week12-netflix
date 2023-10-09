import React from "react";
import LanguageButton from "../LanguageButton";
import "./style.css";

function Footer() {
  return (
    <div className="mx-10 lg:mx-40 py-5 lg:py-20 text-gray-400">
      <p className="pb-5">Questions? Call 000-800-919-1694</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 space-y-2 mb-5">
        <a href="">FAQ</a>
        <a href="">Help Centre</a>
        <a href="">Account</a>
        <a href="">Media Centre</a>
        <a href="">Investor Relations</a>
        <a href="">Jobs</a>
        <a href="">Ways to Watch</a>
        <a href="">Terms of Use</a>
        <a href="">Privacy</a>
        <a href="">Cookie Preferences</a>
        <a href="">Corporate Information</a>
        <a href="">Contact Us</a>
        <a href="">Speed Test</a>
        <a href="">Legal Notices</a>
        <a href="">Only on Netflix</a>
      </div>
      <LanguageButton />
      <p className="mt-5">Netflix India</p>
    </div>
  );
}

export default Footer;
