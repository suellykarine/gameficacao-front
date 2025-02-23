import React from "react";
import "./styles.css";

interface LeaderboardProps {
  leaderboard: any[];
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  return (
    <div className="leaderboard-container">
      <h2>Ranking de Leitores</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Leitor</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((reader) => (
            <tr key={reader.id}>
              <td>{reader.name}</td>
              <td>{reader.streak} dias</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
