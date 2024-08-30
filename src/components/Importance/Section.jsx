/* eslint-disable react/prop-types */
import "./styles/Section.css";

const Section = ({ title, text, imgSrc, imgAlt, reverse }) => {
  return (
    <div className={`relevancia-global-container ${reverse ? "reverse" : ""}`}>
      <div className={`text-section ${reverse ? "reverse" : ""}`}>
        <h3 className={`main-title ${reverse ? "reverse" : ""}`}>{title}</h3>
        <p
          className={`info-text ${reverse ? "reverse" : ""}`}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
      <div className={`image-section ${reverse ? "reverse" : ""}`}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default Section;
