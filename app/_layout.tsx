import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "LabAdmin" }} />
      <Stack.Screen name="about" options={{ title: "Informacion" }} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}
