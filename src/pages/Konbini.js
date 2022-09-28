import React from "react";
import mobileImage from "../resources/images/projects/konbini/konbiniMobile.jpg";
import desktopImage from "../resources/images/projects/konbini/konbiniDesktop.jpg";
import "./styles/konbiniStyles.css";
import ContactSection from "../components/work/Contact";

const Konbini = () => {
  return (
    <div className="konbini-container">
      <div className="konbini-header">
        <h1 className="konbini-title">Konbini</h1>
        {/* <ul className="konbini-list">
          <li className="konbini-list__item">
            Role: UI Design and Development
          </li>
          <li className="konbini-list__item">
            Technology: React JavaScript, CSS
          </li>
          <li className="konbini-list__item">Year: 2022</li>
        </ul> */}

        <div className="konbini-table">
          <div className="konbini-table__header">
            <span>Role</span>
            <span>Technology</span>
            <span>Year</span>
          </div>
          <div className="konbini-table__data">
            <span>Designer/Developer</span>
            <span>React & CSS</span>
            <span>2022</span>
          </div>
        </div>
        <p className="konbini-bio">
          Responsive web design of an online electronic ciggarette store located
          in Austin, TX. The design was to create trust, a simple experience,
          and product knowledge.
        </p>
      </div>
      <div className="konbini-images">
        <div className="konbini-images-1">
          <img src={mobileImage} width="50%" />
        </div>
        <div className="konbini-images-2">
          <img src={desktopImage} width="70%" />
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Konbini;
