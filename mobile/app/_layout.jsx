import { Slot } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "../context/ThemeContext";
import "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <ThemeProvider>
        <SafeScreen>
          <Slot />
        </SafeScreen>
      </ThemeProvider>
      <StatusBar style="dark" />
    </ClerkProvider>
  );
}
