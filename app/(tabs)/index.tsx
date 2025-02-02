import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Link, router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a LabAdmin</Text>
      <Button title="Ver Horarios" onPress={() => router.push("/schedule")} />
      <Button title="Chat Bot" onPress={() => router.push("/bot")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});