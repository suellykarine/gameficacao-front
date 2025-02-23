import React from "react";
import { useLocation } from "react-router-dom";
import StreakInfo from "../components/StreakInfo/StreakInfo";

interface StreakPageLocationState {
  email: string;
  streak: number;
  history: { date: string; status: string }[];
}

const StreakPage: React.FC = () => {
  const location = useLocation();
  const { email, streak, history } = location.state as StreakPageLocationState;

  return <StreakInfo email={email} streak={streak} history={history} />;
};

export default StreakPage;
