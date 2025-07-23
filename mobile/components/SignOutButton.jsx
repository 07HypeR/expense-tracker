import { homeStyles } from "@/assets/styles/home.styles";
import { useTheme } from "@/context/ThemeContext";
import { useClerk } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert, TouchableOpacity, Text } from "react-native";

export const SignOutButton = () => {
  const { signOut } = useClerk();
  const { COLORS } = useTheme();
  const styles = homeStyles(COLORS);
  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: signOut },
    ]);
  };
  return (
    <TouchableOpacity
      style={[
        styles.logoutButton,
        {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        },
      ]}
      onPress={handleSignOut}
    >
      <Ionicons name="log-out-outline" size={22} color="red" />
      <Text style={{ fontWeight: 600, color: "red" }}>Log out</Text>
    </TouchableOpacity>
  );
};
