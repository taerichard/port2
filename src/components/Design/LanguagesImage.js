import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import csharp from "programming-languages-logos/src/csharp/csharp.svg";
import css from "programming-languages-logos/src/css/css.svg";
import html from "programming-languages-logos/src/html/html.svg";

const LanguagesImage = () => {
  return (
    <div className="languages-container">
      <img src={javascript} height="100" />
      <img src={csharp} height="100" />
      <img src={css} height="100" />
      <img src={html} height="100" />
    </div>
  );
};

export default LanguagesImage;
