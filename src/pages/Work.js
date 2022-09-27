import React, { useEffect, useState } from "react";
import "./styles/workStyles.css";
import Projects from "../components/work/Project";
import { projectData } from "../components/work/projectData";
import Project from "../components/work/Project";
import ContactSection from "../components/work/Contact";
import Designs from "../components/work/Designs";

function Work() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div>
      <section className="work-container">
        <div className="work-title-container">
          <h1 className="work-title">
            UI <br />
            Developer
          </h1>
        </div>
        <div className="work-bio-container">
          <div className="work-bio-1">
            <p className="work-bio__text">
              My name is Richard Tae, a UI Designer and Developer. Designing and
              developing a rich user interface is my passion. I aim for clean
              and descriptive user centric designs, creating a pleasureable
              experience.
            </p>
          </div>
          <div className="work-bio-2">
            <p className="work-bio__project">Projects</p>
            <i class="arrow down"></i>
          </div>
        </div>
        {/* <div className="work-wrapper"></div> */}
      </section>
      <section className="work-projects-container">
        <div className={scroll ? "work-projects-active" : "work-projects"}>
          {projectData.map(({ id, title, desc, imgSrc, link }) => {
            return (
              <Project
                id={id}
                title={title}
                desc={desc}
                imgSrc={imgSrc}
                link={link}
              />
            );
          })}
        </div>
      </section>
      <section>
        <Designs />
      </section>
      <section className="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default Work;
