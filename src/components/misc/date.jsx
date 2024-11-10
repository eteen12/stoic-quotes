"use client";
import { useEffect, useState } from "react";

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getFormattedDate = () => {
      const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
      const date = new Date().toLocaleDateString("en-GB", options); // en-GB uses the dd/mm/yy format
      return date.replace(/\//g, "-"); // Replace slashes with dashes
    };

    setCurrentDate(getFormattedDate());
  }, []);

  return <h3>{currentDate}</h3>;
};

export default DateDisplay;
