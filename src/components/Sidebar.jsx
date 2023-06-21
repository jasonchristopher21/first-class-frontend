import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { icon_cart, icon_home, icon_menubar, icon_order } from "../assets";
import "../index.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const Dropdown = () => {
    return (
      <div>
        <ul>
          <li>
            <div className="nav-content">
              <img src={icon_home} />
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="nav-content">
              <img src={icon_cart} />
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="nav-content">
              <img src={icon_order} />
            </div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <nav>
      <div className="rounded-full bg-white p-4">
        <div className="nav-content" onClick={toggleNavBar}>
          <img src={icon_menubar} />
        </div>

        {isOpen && <Dropdown />}
      </div>
    </nav>
  );
};
