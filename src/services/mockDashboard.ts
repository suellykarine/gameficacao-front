export const fetchMetrics = async (filters: any) => {
  return {
    totalReaders: 1000,
    engagedReaders: 800,
    activeStreaks: 500,
  };
};

export const fetchLeaderboard = async (filters: any) => {
  return [
    { id: 1, name: "Leitor 1", streak: 20 },
    { id: 2, name: "Leitor 2", streak: 18 },
    { id: 3, name: "Leitor 3", streak: 15 },
  ];
};

export const fetchEngagementData = async (filters: any) => {
  return [
    { date: "2025-02-01", opens: 100 },
    { date: "2025-02-02", opens: 120 },
    { date: "2025-02-03", opens: 110 },
  ];
};
