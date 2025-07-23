import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/CustomDrawer";

export default function Layout() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/sign-in" />;

  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
}
