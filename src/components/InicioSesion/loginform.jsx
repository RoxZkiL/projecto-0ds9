// LoginForm.jsx
import { useState } from "react";
import "./styles/loginform.css"; // Importa el archivo CSS para estilos
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const LoginForm = () => {
  // Estado para el formulario de inicio de sesión
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Manejador para el envío del formulario de inicio de sesión
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginEmail === '' || loginPassword === '') {
      setLoginError('Por favor, completa todos los campos.');
      return;
    }
    console.log('Formulario de inicio de sesión enviado:', { loginEmail, loginPassword });
    setLoginError('');
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="loginEmail">Correo electrónico</label>
            <input
              type="email"
              id="loginEmail"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Contraseña</label>
            <input
              type="password"
              id="loginPassword"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          {loginError && <p className="error-message">{loginError}</p>}
          <button type="submit">Iniciar Sesión</button>
        </form>
        <div className="social-login-container">
          <div className="social-login-icons">
            <FaInstagram className="social-login-icon" />
            <FaLinkedin className="social-login-icon" />
            <FaYoutube className="social-login-icon" />
            <FaTwitter className="social-login-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
