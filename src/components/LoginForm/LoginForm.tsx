import React, { useState } from "react";
import { loginUser } from "../../services/authService";
import "./style.css";

interface LoginFormProps {
  onLoginSuccess: (email: string, streak: number, history: any[]) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    if (!email) {
      setError("O e-mail é obrigatório.");
      return;
    }

    try {
      const data = await loginUser(email);

      if (data.streak) {
        onLoginSuccess(email, data.streak, data.history);
      } else {
        setError("Falha no login. Tente novamente.");
      }
    } catch (error) {
      setError("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="login-form">
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button onClick={handleLogin} className="login-button">
        Entrar
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginForm;
