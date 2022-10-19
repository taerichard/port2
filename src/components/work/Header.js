import React from "react";
import "./styles/headerStyles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav className="header-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "activeNavLink" : "active")}
          to="/"
          end
        >
          Work
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeNavLink" : "active")}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeNavLink" : "active")}
          to="contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
