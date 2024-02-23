import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

  return <RootLayoutNav />;
}

const RootLayoutNav = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="(modals)/login"
        options={{
          presentation: "modal",
          title: "Log in or sign up",
          headerTitleStyle: {
            fontFamily: "Montserrat_600SemiBold",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="listing/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="(modals)/booking" options={{ headerShown: false }} />
    </Stack>
  );
};
