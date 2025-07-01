import React from "react";
import { useEffect, useState } from "react";

import "./style.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;