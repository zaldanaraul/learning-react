import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";

const Navigation = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  // Menu classes: className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
  // MenuMask classes: className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-49"
  let menu;
  let menuMask;
  if (showMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
        The Menu
      </div>
    );
    menuMask = (
      <div
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-49"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menu}
      {menuMask}
    </nav>
  );
};

export default Navigation;
