import { useEffect, useState } from "react";
import {
  fetchEngagementData,
  fetchLeaderboard,
  fetchMetrics,
} from "../../services/mockDashboard";

import { EngagementCharts } from "../EngagamentsCharts/Engagementscharts";
import Filters from "../Filters/Filters";
import { Leaderboard } from "../LeaderBoard/LeaderBoard";
import { MetricsOverview } from "../Metrics/Metrics";
import "./styles.css";

interface Metrics {
  totalReaders: number;
  engagedReaders: number;
  activeStreaks: number;
}

interface Leader {
  id: number;
  name: string;
  streak: number;
}

interface EngagementData {
  date: string;
  opens: number;
}

export const Dashboard = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [leaderboard, setLeaderboard] = useState<Leader[]>([]);
  const [engagementData, setEngagementData] = useState<EngagementData[]>([]);
  const [filters, setFilters] = useState({
    newsletter: "",
    dateRange: "last_month",
  });

  useEffect(() => {
    fetchMetrics(filters).then(setMetrics);
    fetchLeaderboard(filters).then(setLeaderboard);
    fetchEngagementData(filters).then(setEngagementData);
  }, [filters]);

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <Filters />
        <div className="dashboard-grid">
          <div className="section">
            <MetricsOverview metrics={metrics} />
          </div>
          <div className="section">
            <Leaderboard leaderboard={leaderboard} />
          </div>
          <div className="section">
            <EngagementCharts data={engagementData} />
          </div>
        </div>
      </div>
    </div>
  );
};
