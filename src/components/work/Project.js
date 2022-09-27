import React from "react";
import "./styles/projectStyles.css";
import { NavLink, useNavigate } from "react-router-dom";

const Project = ({ id, title, desc, imgSrc, link }) => {
  return (
    <div className="project" key={id}>
      <div className="project-image ">
        <img src={imgSrc} />
      </div>
      <div className="project-info">
        <h1 className="project-title">
          <NavLink className="project-link" to={link}>
            {title}
          </NavLink>
        </h1>
        <p className="project-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Project;
