/* eslint-disable react/prop-types */
import "./styles/FormStyles.css";

const FormHeader = ({ title }) => {
  return (
    <div className="form-header">
      <h2>{title}</h2>
    </div>
  );
};

export default FormHeader;
