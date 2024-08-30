import "./styles/FAQ.css";
import img from "../../assets/LandingPage/FAQ/faqimg.jpg";
import text from "./utils/FAQ";

export const FAQ = () => {
  return (
    <div className="faq">
      <div className="img-div">
        <img src={img} alt="image not found" />
      </div>
      <div className="text-div">
        <div className="heading-div">
          <h2>{text.h2}</h2>
          <legend>{text.legend}</legend>
        </div>
        <div className="main-text">
          <p>{text.p1}</p>
          <p>{text.p2}</p>
        </div>
      </div>
    </div>
  );
};
