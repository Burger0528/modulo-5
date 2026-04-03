import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../utils/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = authenticate(email, password);
    if (user) {
      setIsSuccess(true);
      setMessage(`Bienvenido, ${user.name}`);
      setTimeout(() => navigate("/home"), 900);
    } else {
      setIsSuccess(false);
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div className="apple-page">
      <div className="apple-card">
        <div className="apple-logo">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
              fill="rgba(10,132,255,0.2)"
              stroke="#0a84ff"
              strokeWidth="1.2"
            />
            <path
              d="M15.5 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 8.5 3.5 3.5 0 0 1 12 5a3.5 3.5 0 0 1 3.5 3.5zM5 19a7 7 0 0 1 14 0"
              stroke="#0a84ff"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1>Iniciar sesión</h1>
        <p className="subtitle">Ingresa tus credenciales para continuar</p>

        <div className="apple-field">
          <input
            className="apple-input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="apple-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
          />
        </div>

        <button className="apple-btn" onClick={handleLogin}>
          Continuar
        </button>

        {message && (
          <div className={`apple-message ${isSuccess ? "success" : "error"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
