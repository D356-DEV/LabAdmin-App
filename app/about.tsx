import Logo from "@/components/Logo";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <Logo />
      <Text style={styles.text}>
        LabAdmin se posiciona como una plataforma integral diseñada para atender
        las diversas necesidades de administración de los espacios destinados a
        laboratorios en la Universidad de Guadalajara.
      </Text>
      <Text style={styles.text}>
        La plataforma no solo busca optimizar el proceso administrativo, sino
        que también ofrece a los usuarios una experiencia más sencilla y
        eficiente al registrarse para ingresar a un laboratorio.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "justify",
    fontSize: 16,
    marginVertical: 5,
  },
});
