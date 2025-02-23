import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./styles.css";

interface EngagementChartsProps {
  data: any;
}

export const EngagementCharts: React.FC<EngagementChartsProps> = ({ data }) => {
  if (!data) return <div>Carregando gráficos...</div>;

  return (
    <div className="chart-container">
      <h2 className="chart-title">Gráficos de Engajamento</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="opens" stroke="#ffce04" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
