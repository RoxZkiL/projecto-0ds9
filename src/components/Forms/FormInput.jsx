/* eslint-disable react/prop-types */
import "./styles/FormStyles.css";

const FormInput = ({ type, placeholder, handleChange, value, name }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-input"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default FormInput;
