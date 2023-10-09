import React from "react";
import netflixLogo from "/netflix.svg";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import InputHome from "../../components/InputHome";

function Login() {
  return (
    <div className="addingBgInCSS text-white pt-20">
      <img
        src={netflixLogo}
        alt="Netflix Logo"
        className="w-1/5 lg:w-2/12 absolute z-10 top-5 left-10"
      />
      <form className="mx-auto p-20 bg-black bg-opacity-90 w-2/5 flex flex-col rounded gap-5 mb-5 z-10">
        <h1 className="font-bold text-3xl z-10">Sign In</h1>
        <InputHome id="email" placeholder="Email or Phone number" type="text" />
        <InputHome id="password" placeholder="Password" type="password" />
        <button className="bg-red-600 text-white font-semibold px-3 py-3 rounded z-10">
          Sign In
        </button>
        <div className="flex justify-between text-sm z-10">
          <div>
            <input
              type="checkbox"
              name="remember"
              id="remenmber"
              className="z-10"
            />
            <span className="pl-2">Remember Me</span>
          </div>
          <a className="hover:underline hover:cursor-pointer z-10">
            Need help?
          </a>
        </div>
        <div className="z-10">
          <p className="text-zinc-500 z-10">
            New to Netflix?{" "}
            <span className="text-white hover:underline hover:cursor-pointer">
              Sign up now.
            </span>
          </p>
          <p className="text-sm mt-5 text-zinc-500 mb-14 z-10">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a className="text-blue-800 hover:underline hover:cursor-pointer">
              Learn more.
            </a>
          </p>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Login;
