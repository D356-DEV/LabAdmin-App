import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "LabAdmin" }} />
      <Stack.Screen name="about" options={{ title: "Informacion" }} />
      <Stack.Screen name="Register" options={{ title: "Registro" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="bot" options={{ title: "Chat Bot" }} />
      <Stack.Screen name="schedule" options={{ title: "Horarios" }} />
      <Stack.Screen name ="horario" options={{title:"Schedule"}}/>
      <Stack.Screen name = "resources" options = {{title:"recuros"}}/>
    </Stack>
  );
}