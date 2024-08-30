import "../styles/FormStyles.css";
import FormInput from "../FormInput";
import FormHeader from "../FormHeader";
import FormButton from "../FormButton";
import { useContext, useState } from "react";
import AuthContext from "../../AuthContext/AuthContext";

const LoginForm = () => {
  const { login, isLoading, error } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    try {
      // Mostrar el modal primero
      setIsModalVisible(true);

      // Esperar 6 segundos antes de continuar con el proceso de login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Realizar la petición de login después de que el modal ha estado visible
      const response = await login({ email, password });

      if (!response.ok) {
        setFormError(response.error || "Ocurrió un error inesperado.");
      }

      // Ocultar el modal después del login
      setIsModalVisible(false);
    } catch (err) {
      console.error("Error durante el login:", err);
      setFormError("Ocurrió un error al iniciar sesión. Inténtalo de nuevo.");
      setIsModalVisible(false);
    }
  };

  return (
    <div className="outer-container">
      <div className="background-image"></div>
      <div className="inner-container">
        <div className="form-wrapper">
          <FormHeader title="Inicia sesión" />
          <form className="login-form" onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              placeholder="Ingresa tu email..."
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña..."
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
            />
            <FormButton text="Iniciar Sesión" />
          </form>
          {isLoading && <p>Iniciando sesión...</p>}
          {isModalVisible && (
            <div className="modal">
              <div className="modal-content">
                <p>¡Has iniciado sesión correctamente!</p>
              </div>
            </div>
          )}
          {formError && <p className="error">{formError}</p>}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
