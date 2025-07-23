import { View, Text, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";
import { useTheme } from "@/context/ThemeContext";
import { SignOutButton } from "./SignOutButton";
import ThemeToggler from "./ThemeToggler";
import { homeStyles } from "@/assets/styles/home.styles";

export default function CustomDrawerContent({ navigation, ...props }) {
  const { user } = useUser();
  const { COLORS } = useTheme();
  const styles = homeStyles(COLORS);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[styles.drawerContainer]}
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header */}
      <View style={styles.drawerHeader}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={styles.drawerLogo}
          resizeMode="contain"
        />
        <Text style={[styles.usernameText, { color: COLORS.text }]}>
          {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}
        </Text>
        <Text style={[styles.welcomeTitle, { color: COLORS.text }]}>
          {user?.emailAddresses[0]?.emailAddress}
        </Text>
      </View>

      {/* Theme Toggler */}
      <View style={styles.drawerSelection}>
        <Text style={[styles.sectionTitle, { color: COLORS.text }]}>Theme</Text>
        <ThemeToggler />
      </View>

      {/* Sign Out */}
      <View style={styles.drawerSelection}>
        <Text style={[styles.sectionTitle, { color: COLORS.text }]}>
          Account
        </Text>
        <SignOutButton />
      </View>

      {/* Close Drawer Button */}
      <View style={styles.drawerCloseContainer}>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.closeDrawer()}
          >
            <Ionicons name="close" size={18} color={COLORS.white} />
            <Text style={[styles.addButtonText, { color: COLORS.white }]}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
