import React from "react";
import mobileImage from "../resources/images/projects/konbini/konbiniMobile.jpg";
import desktopImage from "../resources/images/projects/konbini/konbiniDesktop.png";
import "./styles/konbiniStyles.css";
import ContactSection from "../components/work/Contact";
import konbiniLogo from "../resources/images/projects/konbini/konbiniLogo.png";

const Konbini = () => {
  return (
    <div className="konbini-container">
      <h1 className="konbini-title">Konbini</h1>
      <div className="konbini-info">
        <div className="konbini-role">
          <h2 className="margin-right">Role: </h2>
          <h2>UI Designer / Developer</h2>
        </div>
        <div className="konbini-tech">
          <h2 className="margin-right">Technology:</h2>
          <h2>React / CSS</h2>
        </div>
        <div className="konbini-year">
          <h2 className="margin-right">Year:</h2>
          <h2>2022</h2>
        </div>
      </div>
      <p className="konbini-bio">
        I designed and developed a landing page for an online electronic store
        located in Austin, TX. My role involved wireframing and developing using
        React and CSS.
      </p>
      <div className="konbini-link-container">
        <a
          target="_blank"
          href="https://melodious-creponne-0d0a36.netlify.app/"
          className="konbini-link"
        >
          Click here to view project
        </a>
      </div>
      <div className="konbini-prototype">
        <h2 className="konbini-title2">Prototype Design</h2>
        <div className="konbini-image">
          <img src={desktopImage} />
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Konbini;
