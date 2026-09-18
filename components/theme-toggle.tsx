"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  };

  const nextLabel = theme === "dark" ? "Light" : "Dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextLabel.toLowerCase()} theme`}
      title={`Switch to ${nextLabel.toLowerCase()} theme`}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === "dark" ? "☼" : "☾"}
      </span>
      <span className="theme-toggle-label">{nextLabel}</span>
    </button>
  );
}
