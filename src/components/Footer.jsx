import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-700 text-gray-900 font-bold w-full p-1 fixed bottom-0 z-[9999]">
      <h1 className="text-center w-full text-xs">
        Powered by{" "}
        <a
          href="https://meedweff.uz"
          className="hover:underline text-sm font-black hover:text-white"
        >
          MeedOff
        </a>
      </h1>
    </div>
  );
};

export default Footer;
