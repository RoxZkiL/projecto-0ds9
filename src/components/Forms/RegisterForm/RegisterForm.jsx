import "../styles/FormStyles.css";
import FormInput from "../FormInput";
import FormHeader from "../FormHeader";
import FormButton from "../FormButton";
import { useContext, useState } from "react";
import AuthContext from "../../AuthContext/AuthContext";

const RegisterForm = () => {
  const { register, isLoading } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setFormError("Los correos electrónicos no coinciden.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Las contraseñas no coinciden.");
      return;
    }

    setFormError("");

    try {
      // Mostrar el modal primero
      setIsModalVisible(true);

      // Esperar 6 segundos antes de continuar con el proceso de registro
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Realizar la petición de registro después de que el modal ha estado visible
      const response = await register({
        name,
        email,
        confirmEmail,
        password,
        confirmPassword,
        is_admin: false,
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setConfirmEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setFormError(response.error || "Ocurrió un error inesperado.");
      }

      // Ocultar el modal después del registro
      setIsModalVisible(false);
    } catch (err) {
      console.error("Error durante el registro:", err);
      setFormError("Ocurrió un error al registrar. Inténtalo de nuevo.");
      setIsModalVisible(false);
    }
  };

  return (
    <div className="outer-container">
      <div className="background-image"></div>
      <div className="inner-container">
        <div className="form-wrapper">
          <FormHeader title="Crea tu cuenta" />
          <form className="registration-form" onSubmit={handleSubmit}>
            <FormInput
              name="name"
              type="text"
              placeholder="Ingresa tu nombre..."
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Ingresa tu email..."
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              name="confirmEmail"
              type="email"
              placeholder="Confirma tu email..."
              value={confirmEmail}
              handleChange={(e) => setConfirmEmail(e.target.value)}
            />
            <FormInput
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña..."
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
            />
            <FormInput
              name="confirmPassword"
              type="password"
              placeholder="Confirma tu contraseña..."
              value={confirmPassword}
              handleChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input type="hidden" name="is_admin" value={false} />
            <FormButton text="Crear Cuenta" />
          </form>
          {isLoading && <p>Registrando...</p>}
          {isModalVisible && (
            <div className="modal">
              <div className="modal-content">
                <p>¡Registro exitoso!</p>
              </div>
            </div>
          )}
          {formError && <p className="error">{formError}</p>}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
