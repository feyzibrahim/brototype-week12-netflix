import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import Button from "../../components/Button";

function Home() {
  return (
    <>
      <div className="flex flex-col lg:h-screen addingBgInCSS">
        <Navbar />
        <div className="flex flex-col h-full justify-center items-center z-10 text-white text-center">
          <h1 className="text-5xl font-bold">
            Enjoy big movies, hit series and more from ₹ 149.
          </h1>
          <h3>Join today. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            <Button text="Get Started" />
          </div>
        </div>
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </>
  );
}

export default Home;
