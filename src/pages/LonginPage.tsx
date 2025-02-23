import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (
    email: string,
    streak: number,
    history: any[]
  ) => {
    navigate("/streak", { state: { email, streak, history } });
  };

  return (
    <div className="login-page">
      <h2>Login - The News Gamification</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
