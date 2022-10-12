import React from "react";
import { aboutServiceData } from "../components/about/aboutServiceData";
import AboutServiceCard from "../components/about/AboutServiceCard";
import "./styles/aboutStyles.css";
import meSpain from "../resources/images/about/meSpain.jpg";
import ContactSection from "../components/work/Contact";

export const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-title-block">
          <h1 className="about-title">Richard Tae</h1>
        </div>
        <div className="about-row-1">
          <div className="about-info">
            <p>
              I am a UI Developer/Designer. Designing and developing user
              centric web designs are my passions.
            </p>
            <p>
              I recently graduated with a bachelor’s of applied science in
              Software Development with development work experience. I’m a USAF
              veteran, team player and a forever humble student to web
              development.
            </p>
          </div>

          <div className="about-image">
            <img src={meSpain} />
          </div>
        </div>
        <div className="aboutService-block">
          <div className="aboutServiceCards-container">
            {aboutServiceData.map(({ title, description }) => {
              return (
                <AboutServiceCard title={title} description={description} />
              );
            })}
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default About;
