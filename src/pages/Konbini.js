import React from "react";
import mobileImage from "../resources/images/projects/konbini/konbiniMobile.jpg";
import desktopImage from "../resources/images/projects/konbini/konbiniDesktop.jpg";
import "./styles/konbiniStyles.css";

const Konbini = () => {
  return (
    <div className="konbini-container">
      <div className="konbini-header">
        <h1 className="konbini-title">Konbini</h1>
        <ul className="konbini-list">
          <li className="konbini-list__item">
            Role: UI Design and Development
          </li>
          <li className="konbini-list__item">
            Technology: React JavaScript, CSS
          </li>
          <li className="konbini-list__item">Year: 2022</li>
        </ul>
        <p className="konbini-bio">
          Responsive web design of an online electric ciggarette store located
          in Austin, TX. The design was to create trust, a simple experience,
          and product knowledge.
        </p>
      </div>
      <div className="konbini-images">
        <img src={desktopImage} width="50%" />
        <img src={mobileImage} width="50%" />
      </div>
    </div>
  );
};

export default Konbini;
