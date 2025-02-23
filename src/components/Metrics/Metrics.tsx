import React from "react";
import "./styles.css";

interface MetricsOverviewProps {
  metrics: any;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({
  metrics,
}) => {
  if (!metrics) return <div>Carregando métricas...</div>;

  return (
    <div className="metrics-container">
      <div className="metric-card">
        <h3>Total de Leitores</h3>
        <p>{metrics.totalReaders}</p>
      </div>
      <div className="metric-card">
        <h3>Leitores Engajados</h3>
        <p>{metrics.engagedReaders}</p>
      </div>
      <div className="metric-card">
        <h3>Streaks Ativos</h3>
        <p>{metrics.activeStreaks}</p>
      </div>
    </div>
  );
};
