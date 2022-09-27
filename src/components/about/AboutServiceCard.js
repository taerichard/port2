import React, { useState } from "react";
import "./styles/aboutServiceCardStyles.css";

const AboutServiceCard = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="aboutServiceCard-item">
      <button onClick={() => setIsActive(!isActive)}>
        <h4>{title}</h4>
        <span
          className={isActive ? "aboutServiceCard-symbol" : "collapsed"}
        ></span>
      </button>
      {isActive && (
        <div className="aboutServiceCard-active">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default AboutServiceCard;
