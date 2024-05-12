import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LineMdHomeTwotone, LineMdHomeTwotone2 } from "./Icons";

const Header = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="bg-green-700 text-gray-900 font-bold w-full p-2 flex items-center justify-center fixed z-[999] top-0">
      <Link
        to={"/"}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        {hover ? <LineMdHomeTwotone /> : <LineMdHomeTwotone2 />}
      </Link>
    </div>
  );
};

export default Header;
