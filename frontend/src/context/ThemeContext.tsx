"use client"; 

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "custom";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>("custom");

  // Sync theme changes with HTML document attributes safely
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "custom");
    root.classList.add("custom");
    root.setAttribute("data-theme", "custom");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}