import { useEffect } from "react";
import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";
import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [montserratLoaded, montserratError] = useMontserrat({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  useEffect(() => {
    if (montserratError) throw montserratError;
  }, [montserratError]);

  useEffect(() => {
    if (montserratLoaded) {
      SplashScreen.hideAsync();
    }
  }, [montserratLoaded]);

  if (!montserratLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
