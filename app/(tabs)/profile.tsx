import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { router } from "expo-router";
export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Usuario</Text>
      <Button title="Ver Horarios" onPress={() => router.push("/schedule")} />
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