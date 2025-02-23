import React, { useState } from "react";
import "./styles.css";

const Filters: React.FC = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<string>("");
  const [selectedDateRange, setSelectedDateRange] = useState<string>("");

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNewsletter(e.target.value);
  };

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDateRange(e.target.value);
  };

  return (
    <div className="filters-container">
      <label>
        Newsletter:
        <select
          value={selectedNewsletter}
          onChange={handleNewsletterChange}
          className="filter"
        >
          <option value="">Todos</option>
          <option value="newsletter1">Newsletter 1</option>
          <option value="newsletter2">Newsletter 2</option>
        </select>
      </label>
      <label>
        Período:
        <select
          value={selectedDateRange}
          onChange={handleDateRangeChange}
          className="filter"
        >
          <option value="last_week">Última semana</option>
          <option value="last_month">Último mês</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
