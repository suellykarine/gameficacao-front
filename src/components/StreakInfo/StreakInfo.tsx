import React from "react";
import "./style.css";
interface StreakInfoProps {
  email: string;
  streak: number;
  history: { date: string; status: string }[];
}

const StreakInfo: React.FC<StreakInfoProps> = ({ email, streak, history }) => {
  return (
    <div className="streak-info">
      <h2>Bem-vindo, {email}!</h2>
      <h3>Seu streak atual: {streak} dias</h3>
      <h4>Histórico de aberturas:</h4>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.date} - {entry.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreakInfo;
