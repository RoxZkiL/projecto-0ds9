/* eslint-disable no-undef */
import { useState } from "react";
import emailjs from "emailjs-com";
import "./Styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setIsSubmitting(true);
    setLoading(true);

    const templateParams = {
      from_name: formData.nombre,
      message: formData.mensaje,
      from_email: formData.email,
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      console.log("Correo enviado:", result.text);
      setIsModalVisible(true);

      setTimeout(() => {
        setIsModalVisible(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      const errorMessage =
        error?.text || "Error desconocido al enviar el correo.";
      setError(errorMessage);
      console.error("Error al enviar correo:", errorMessage);
    } finally {
      setLoading(false);
      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });
    }
  };

  return (
    <div className="formulario-wrapper">
      <h2>Contáctanos</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Desarrollo Sostenible</h3>
          <p>Grupo 2 - Counter Logic Coding</p>
          <p>Generation Chile, Innovación y Tecnología</p>
          <h3>Conéctate con Nosotros</h3>
          <div className="social-icons">
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=435&format=png&color=1A1A1A"
                alt="Facebook"
                width="30"
                height="30"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=1A1A1A"
                alt="X"
                width="30"
                height="30"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=32292&format=png&color=1A1A1A"
                alt="Instagram"
                width="30"
                height="30"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
                alt="LinkedIn"
                width="30"
                height="30"
              />
            </a>
          </div>
          <p>© 2024 Counter Logic Coding</p>
          <p>Todos Los Derechos Reservados.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h3 className="contact-form-title">Formulario de Contacto</h3>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa tu Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ingresa un correo válido"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Ingresa tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
      {isSubmitting && (
        <div className={`modal ${isSubmitting ? "modal-submitting" : ""}`}>
          <div className="modal-content">
            <p>Enviando formulario...</p>
          </div>
        </div>
      )}
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>¡Correo enviado exitosamente!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
