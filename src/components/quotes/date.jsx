"use client";
import { useEffect, useState } from "react";

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getFormattedDate = () => {
      return new Date().toLocaleDateString();
    };

    setCurrentDate(getFormattedDate());
  }, []);

  return <h3>{currentDate}</h3>;
};

export default DateDisplay;
