import React from "react";
import ContactSection from "../components/work/Contact";
import "./styles/northCreekStyles.css";
import loginImage from "../resources/images/projects/photopoints/login.jpg";
import detailsImage from "../resources/images/projects/photopoints/details.jpg";
import dashboardImage from "../resources/images/projects/photopoints/dashboard.jpg";
import dashboardImageImage from "../resources/images/projects/photopoints/dashboard-image.jpg";

const northCreek = () => {
  const projectImages = [
    {
      id: 1,
      title: "Login View",
      imgSrc: loginImage,
    },
    {
      id: 2,
      title: "Dashboard View",
      imgSrc: dashboardImage,
    },
    {
      id: 3,
      title: "Dashboard View",
      imgSrc: dashboardImageImage,
    },
    {
      id: 4,
      title: "Details View",
      imgSrc: detailsImage,
    },
  ];
  return (
    <div className="nc-container">
      <h1 className="nc-title">Photo Points</h1>
      <div className="nc-info">
        <div className="nc-role">
          <h2 className="margin-right">Role: </h2>
          <h2>Software Developer</h2>
        </div>
        <div className="nc-tech">
          <h2 className="margin-right">Technology:</h2>
          <h2>DotNetCore, MSSQL, </h2>
        </div>
        <div className="nc-year">
          <h2 className="margin-right">Year:</h2>
          <h2>2021</h2>
        </div>
      </div>
      <p className="nc-bio">
        I created a web application for North Creek Forest administrators. My
        role involved creating APIs, controllers, retrieving data for users, and
        dashboard styling.
      </p>
      {/* <div className="nc-link-container">
        <a className="nc-link">Click here to view project</a>
      </div> */}
      <div className="nc-prototype">
        <h2 className="nc-title nc-title2">User Interfaces</h2>
        <div className="nc-images">
          {projectImages.map((image) => {
            return (
              <div className="nc-image">
                <img src={image.imgSrc} />
              </div>
            );
          })}
        </div>
      </div>
      {/* 
      <div className="row-2">
        <div className="konbini-img">
          <img src={konbiniLogo} />
          <div className="konbini-overlay">
            <p>View Project</p>
          </div>
        </div>
      </div> */}

      <ContactSection />
    </div>
  );
};

export default northCreek;
