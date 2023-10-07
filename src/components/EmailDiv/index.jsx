import React from "react";
import Button from "../ArrowButton";
import InputHome from "../InputHome";

function EmailDiv() {
  return (
    <>
      <p className="text-xl mt-5 text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex lg:flex-row flex-col items-center gap-3 w-full mt-5 lg:px-36 ">
        <InputHome />
        <Button text="Get Started" />
      </div>
    </>
  );
}

export default EmailDiv;
