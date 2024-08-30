/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const register = async (userData) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        navigate("/login");
        return { ok: true };
      } else {
        setError(data.error);
        return { ok: false, error: data.error };
      }
    } catch (err) {
      setIsLoading(false);
      setError("Ocurrió un error al registrar.");
      console.error("Error en el registro:", err);
    }
  };

  const login = async (userData) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        const parsedUserName = decodeToken(data.token);
        if (parsedUserName) {
          setUser(parsedUserName);
          localStorage.setItem("token", data.token);
          navigate("/inicio");
          return { ok: true };
        } else {
          setError("Token inválido o expirado.");
          return { ok: false, error: "Token inválido o expirado." };
        }
      } else {
        setError(data.error);
        return { ok: false, error: data.error };
      }
    } catch (err) {
      setIsLoading(false);
      setError("Ocurrió un error al iniciar sesión.");
      console.error("Error en el login:", err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const parsedUserName = decodeToken(token);
      if (parsedUserName) {
        setUser(parsedUserName);
      } else {
        logout(); // Desloguear si el token ha expirado
      }
    }
  }, []);

  // Decodificación y validación del token JWT
  const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = decodeURIComponent(
        atob(base64Url)
          .split("")
          .map((c) => `%${c.charCodeAt(0).toString(16)}`)
          .join("")
      );
      const decodedToken = JSON.parse(base64);

      // Verificar si el token ha expirado
      const currentTime = Date.now() / 1000; // Convertir a segundos
      if (decodedToken.exp < currentTime) {
        console.warn("Token expirado");
        return null;
      }

      const parseUserName = decodedToken.name.split(" ")[0];
      return parseUserName.charAt(0).toUpperCase() + parseUserName.slice(1);
    } catch (error) {
      console.error("Failed to decode token", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
