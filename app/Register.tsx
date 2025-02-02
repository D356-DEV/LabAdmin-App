import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { Link, router } from "expo-router";
import Logo from "@/components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const [userType, setUserType] = useState("");

  const handleRegister = () => {
    // Simulación de registro
    if (userType) {
      router.push("/(tabs)");
    } else {
      Alert.alert("Error", "Por favor, selecciona un tipo de usuario");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <Logo />
      <Text style={styles.text}>Selecciona tu tipo de usuario:</Text>
      <View style={styles.radioContainer}>
        <Button title="Estudiante" onPress={() => setUserType("Estudiante")} />
        <Button title="Profesor" onPress={() => setUserType("Profesor")} />
        <Button title="Administrador" onPress={() => setUserType("Administrador")} />
      </View>
      <Button title="Registrarse" color="orange" onPress={handleRegister} />
      <Link href={'/'} style={styles.link}>¿Ya tienes una cuenta? Inicia sesión</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  link: {
    color: 'orange',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  }
});