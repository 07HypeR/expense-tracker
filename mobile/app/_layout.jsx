import { Slot } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "../context/ThemeContext";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <ThemeProvider>
        <SafeScreen>
          <KeyboardProvider>
            <Slot />
          </KeyboardProvider>
        </SafeScreen>
      </ThemeProvider>
      <StatusBar style="dark" />
    </ClerkProvider>
  );
}
