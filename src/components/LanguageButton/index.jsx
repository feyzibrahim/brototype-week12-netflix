import React from "react";

function LanguageButton() {
  return (
    <select className="rounded bg-zinc-900 bg-opacity-80 font-semibold border border-gray-500 text-white px-5 py-1 mr-3">
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
    </select>
  );
}

export default LanguageButton;
