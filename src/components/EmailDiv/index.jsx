import React, { useRef } from "react";
import Button from "../ArrowButton";
import InputHome from "../InputHome";

function EmailDiv() {
  const inputRef = useRef(null);

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <p className="text-xl mt-5 text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex lg:flex-row flex-col items-center gap-3 w-full mt-5 lg:px-36 ">
        <InputHome
          inputRef={inputRef}
          type="email"
          id="email"
          placeholder="Enter your Email"
        />
        <Button text="Get Started" clickHandler={focusOnInput} />
      </div>
    </>
  );
}

export default EmailDiv;
