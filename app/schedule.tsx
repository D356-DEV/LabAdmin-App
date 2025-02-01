import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Schedule() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horarios de Laboratorio</Text>
      <Text style={styles.scheduleText}>Lunes a Viernes: 8:00 AM - 8:00 PM</Text>
      <Text style={styles.scheduleText}>Sábados: 9:00 AM - 2:00 PM</Text>
      <Text style={styles.scheduleText}>Domingos: Cerrado</Text>
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
  scheduleText: {
    fontSize: 18,
    marginBottom: 10,
  },
});