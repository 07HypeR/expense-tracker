import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { homeStyles } from "@/assets/styles/home.styles";

const THEME_LABELS = {
  coffee: "☕ Coffee",
  forest: "🌲 Forest",
  purple: "🔮 Purple",
  ocean: "🌊 Ocean",
};

const THEME_COLORS = {
  coffee: { borderColor: "#E5D3B7", textColor: "#9A8478" },
  forest: { borderColor: "#C8E6C9", textColor: "#66BB6A" },
  purple: { borderColor: "#D1C4E9", textColor: "#BA68C8" },
  ocean: { borderColor: "#B3E5FC", textColor: "#4FC3F7" },
};

const ThemeToggler = ({ hideActionSheet }) => {
  const { COLORS, setTheme, themeKey } = useTheme();
  const style = homeStyles(COLORS);

  const handleThemeChange = (key) => {
    setTheme(key);
    if (hideActionSheet) {
      setTimeout(() => hideActionSheet(), 250);
    }
  };

  return (
    <View style={[style.actionSheetContainer, { paddingBottom: 20 }]}>
      <Text style={style.actoinSheetTitleText}>🎨 Choose a Theme</Text>

      <View style={style.actionSheetcardWrapper}>
        {Object.entries(THEME_LABELS).map(([key, label]) => {
          const { borderColor, textColor } = THEME_COLORS[key];
          const isActive = themeKey === key;

          return (
            <TouchableOpacity
              key={key}
              activeOpacity={0.85}
              onPress={() => handleThemeChange(key)}
              style={[
                style.actoinSheetCard,
                {
                  backgroundColor: isActive ? COLORS.primary : COLORS.card,
                  borderColor: isActive ? COLORS.primary : borderColor,
                  shadowColor: COLORS.shadow,
                },
              ]}
            >
              <Text
                style={{
                  color: isActive ? COLORS.white : textColor,
                  fontWeight: "600",
                  fontSize: 16,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Cancel Button */}
      <TouchableOpacity
        onPress={hideActionSheet}
        style={[
          style.actionSheetcancelButton,
          {
            backgroundColor: COLORS.card,
          },
        ]}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Cancel</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 30 }} />
    </View>
  );
};

export default ThemeToggler;
