import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { icon_cart, icon_home, icon_menubar, icon_order } from "../assets";
import "../index.css";
import { Link } from "react-router-dom";

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
              <Link to="/home">
                <img src={icon_home} />
              </Link>
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="nav-content">
              <Link to="/cart">
                <img src={icon_cart} />
              </Link>
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="nav-content">
              <Link to="/status/:id">
                <img src={icon_order} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <nav className="fixed bottom-50 right-5 z-50 rounded-full bg-white p-2 shadow-lg">
      <div>
        <div className="nav-content" onClick={toggleNavBar}>
          <img src={icon_menubar} />
        </div>

        {isOpen && <Dropdown />}
      </div>
    </nav>
  );
};
