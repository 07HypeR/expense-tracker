import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEMES = {
  coffee: {
    primary: "#8B593E",
    background: "#FFF8F3",
    text: "#4A3428",
    border: "#E5D3B7",
    white: "#FFFFFF",
    textLight: "#9A8478",
    expense: "#E74C3C",
    income: "#2ECC71",
    card: "#FFFFFF",
    shadow: "#000000",
  },
  forest: {
    primary: "#2E7D32",
    background: "#E8F5E9",
    text: "#1B5E20",
    border: "#C8E6C9",
    white: "#FFFFFF",
    textLight: "#66BB6A",
    expense: "#C62828",
    income: "#388E3C",
    card: "#FFFFFF",
    shadow: "#000000",
  },
  purple: {
    primary: "#6A1B9A",
    background: "#F3E5F5",
    text: "#4A148C",
    border: "#D1C4E9",
    white: "#FFFFFF",
    textLight: "#BA68C8",
    expense: "#D32F2F",
    income: "#388E3C",
    card: "#FFFFFF",
    shadow: "#000000",
  },
  ocean: {
    primary: "#0277BD",
    background: "#E1F5FE",
    text: "#01579B",
    border: "#B3E5FC",
    white: "#FFFFFF",
    textLight: "#4FC3F7",
    expense: "#EF5350",
    income: "#26A69A",
    card: "#FFFFFF",
    shadow: "#000000",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState("coffee");

  const setTheme = async (key) => {
    if (THEMES[key]) {
      setThemeKey(key);
      await AsyncStorage.setItem("app_theme", key); // persist
    }
  };

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await AsyncStorage.getItem("app_theme");
      if (saved && THEMES[saved]) setThemeKey(saved);
    };
    loadTheme();
  }, []);

  const COLORS = THEMES[themeKey];

  return (
    <ThemeContext.Provider value={{ COLORS, themeKey, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
