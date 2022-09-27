import React from "react";
import "./styles/contactSectionStyles.css";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Lets get in touch.</h1>
      <div className="col-1">
        <ul className="contact-list">
          <li className="contact-item">email</li>
          <li className="contact-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/richard-tae-bb4ba215a/"
            >
              linkedIn
            </a>
          </li>
          <li className="contact-item">
            <a target="_blank" href="https://github.com/taerichard">
              github
            </a>
          </li>
          {/* <li className="contact-item">
            <NavLink to="resume">resume</NavLink>
          </li> */}
        </ul>
        <h2 className="contact-logo">© Richard Tae Design 2022</h2>
      </div>
    </div>
  );
};

export default ContactSection;
