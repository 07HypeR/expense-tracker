import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@/context/ThemeContext";

export default SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();
  const { COLORS } = useTheme();

  return (
    <View
      style={{
        backgroundColor: COLORS.background,
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      {children}
    </View>
  );
};
