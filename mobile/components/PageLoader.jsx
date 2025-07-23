import { View, ActivityIndicator } from "react-native";
import { homeStyles, styles } from "../assets/styles/home.styles";
import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";

export default function PageLoader() {
  const { COLORS } = useTheme();
  const styles = homeStyles(COLORS);
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}
