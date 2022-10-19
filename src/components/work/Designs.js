import React, { useState } from "react";
import kon from "../../resources/images/konbini.jpg";
import north from "../../resources/images/northcreek.jpg";
import "./styles/designStyles.css";
import fitnessLogo from "../../resources/images/designs/fitnessLogo.png";
import konbiniDesign from "../../resources/images/designs/konbiniDesign.jpg";
import languageImage from "../../resources/images/designs/languages.png";
import librariesImage from "../../resources/images/designs/libraries.png";
import designTools from "../../resources/images/designs/designTools.png";
import { IconContext } from "react-icons";
import { BsCode } from "react-icons/bs";
import {
  MdOutlineLibraryAddCheck,
  MdOutlineDesignServices,
} from "react-icons/md";

//https://www.youtube.com/watch?v=SK9AlIbexOE&ab_channel=MonsterlessonsAcademy
// https://mattfarley.ca/

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
    <IconContext.Provider value={{ size: "4em" }}>
      <div className="design-container">
        <div className="design-mainTitle">
          <h1>Development Skills</h1>
        </div>
        <div className="design-skills">
          <div className="design design-languages">
            <BsCode size="4em" />
            <h2 className="design-title">Languages</h2>
            <ul className="design-items">
              <li className="design-item">Javascript</li>
              <li className="design-item">CSharp</li>
              <li className="design-item">HTML</li>
              <li className="design-item">CSS</li>
            </ul>
          </div>
          <div className="design design-framework">
            <MdOutlineLibraryAddCheck />

            <h2 className="design-title">Frameworks</h2>
            <ul className="design-items">
              <li className="design-item">React</li>
              <li className="design-item">Node Express</li>
              <li className="design-item">DJango</li>
              <li className="design-item">CSS</li>
            </ul>
          </div>
          <div className="design design-design">
            <MdOutlineDesignServices />
            <h2 className="design-title">Design Tools</h2>
            <ul className="design-items">
              <li className="design-item">Figma</li>
              <li className="design-item">Marvel</li>
              <li className="design-item">Adobe Photoshop</li>
              <li className="design-item">Pen & Paper</li>
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Designs;

{
  /* <div className="design-col">
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
      </div> */
}
