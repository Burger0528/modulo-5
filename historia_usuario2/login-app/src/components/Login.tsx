import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../utils/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = authenticate(email, password);
    if (user) {
      setMessage(`Bienvenido ${user.name}`);
      // redirige tras login exitoso
      setTimeout(() => navigate("/home"), 800);
    } else {
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
      {message && <p>{message}</p>}
    </div>
  );
}
