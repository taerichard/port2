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

        <div className="konbini-table-container">
          <div className="konbini-role">
            <h2>Role: </h2>
            <h2>UI Designer / Developer</h2>
          </div>

          <div className="konbini-tech">
            <h2>Technology:</h2>
            <h2>React / CSS</h2>
          </div>
          <div className="konbini-year">
            <h2>Year:</h2>
            <h2>2022</h2>
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
          <img src={mobileImage} />
        </div>
        <div className="konbini-images-2">
          <img src={desktopImage} />
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Konbini;
