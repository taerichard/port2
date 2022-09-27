import React from "react";
import "./styles/headerStyles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav className="header-nav">
        <NavLink to="/">Work</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </div>
  );
}
