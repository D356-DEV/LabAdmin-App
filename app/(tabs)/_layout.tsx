import React from "react";
import { Tabs } from "expo-router";
import Logo from "@/components/Logo";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home"}} />
      <Tabs.Screen name="bot" options={{ title: "Bot" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
