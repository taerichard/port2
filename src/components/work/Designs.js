import React, { useState } from "react";
import kon from "../../resources/images/konbini.jpg";
import north from "../../resources/images/northcreek.jpg";
import "./styles/designStyles.css";
import fitnessLogo from "../../resources/images/designs/fitnessLogo.png";
import konbiniDesign from "../../resources/images/designs/konbiniDesign.jpg";
import languageImage from "../../resources/images/designs/languages.png";
import librariesImage from "../../resources/images/designs/libraries.png";
import designTools from "../../resources/images/designs/designTools.png";

const Designs = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Languages",
      imgSrc: languageImage,
    },
    {
      id: 2,
      title: "Libraries",
      imgSrc: librariesImage,
    },
    {
      id: 3,
      title: "Design Tools",
      imgSrc: designTools,
    },
    {
      id: 4,
      title: "",
      imgSrc: north,
    },
  ]);

  return (
    <div className="design-container">
      <div className="design-title">
        <h1>Development Skills</h1>
      </div>
      <div className="design-col">
        <div className="design-list-container">
          <ul className="design-lists">
            {images.map(({ id, title, imgSrc }) => {
              return (
                <li
                  className="design-list__item"
                  key={id}
                  onClick={() => setSelectedId(id)}
                >
                  <span
                    className={id == selectedId ? "design-list__active" : ""}
                  >
                    {title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="design-list-image">
          <img
            src={images.filter((image) => image.id == selectedId)[0].imgSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default Designs;
