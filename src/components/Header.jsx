import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IonCaretBack, LineMdHomeTwotone } from "./Icons";

const Header = () => {
  const loc = useLocation();
  return (
    <div
      className={`${
        loc.pathname == "/" ? "" : "flex justify-between items-center"
      } bg-green-700 text-gray-900 font-bold w-full p-2 flex items-center justify-center fixed z-[999] top-0`}
    >
      {loc.pathname == "/" ? (
        <></>
      ) : (
        <Link to={-1}>
          <IonCaretBack />
        </Link>
      )}
      <Link to={"/"}>
        <LineMdHomeTwotone />
      </Link>
      <div></div>
    </div>
  );
};

export default Header;
