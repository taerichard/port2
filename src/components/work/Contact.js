import React from "react";
import "./styles/contactSectionStyles.css";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Lets get in touch.</h1>
      <div className="col-1">
        <ul className="contact-list">
          <li className="contact-item">
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=taerichard@gmail.com
"
            >
              email
            </a>
          </li>
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
        </ul>
        <h2 className="contact-logo">© Richard Tae Design 2022</h2>
      </div>
    </div>
  );
};

export default ContactSection;
