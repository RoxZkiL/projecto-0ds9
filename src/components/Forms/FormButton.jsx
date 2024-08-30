/* eslint-disable react/prop-types */
import "./styles/FormStyles.css";

const FormButton = ({ text }) => {
  return (
    <div className="form-group form-button-container">
      <button type="submit" className="form-button">
        {text}
      </button>
    </div>
  );
};

export default FormButton;
