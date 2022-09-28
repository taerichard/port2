import React, { useState } from "react";
import kon from "../../resources/images/konbini.jpg";
import north from "../../resources/images/northcreek.jpg";
import "./styles/designStyles.css";

const Designs = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Konbini",
      imgSrc: "",
    },
    {
      id: 2,
      title: "",
      imgSrc: north,
    },
    {
      id: 3,
      title: "Images",
      imgSrc: north,
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
        <h1>Small Designs.</h1>
      </div>
      <div className="design-list-container">
        <ul className="design-lists">
          {images.map(({ id, title, imgSrc }) => {
            return (
              <li
                className="design-list__item"
                key={id}
                onClick={() => setSelectedId(id)}
              >
                <span className={id == selectedId ? "design-list__active" : ""}>
                  {title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="design-list-image">
        <img src={images.filter((image) => image.id == selectedId)[0].imgSrc} />
      </div>
    </div>
  );
};

export default Designs;