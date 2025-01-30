import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { Link, router } from "expo-router";
import Logo from "@/components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Logo />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputForm}
          placeholder="Codigo"
          placeholderTextColor="#fff"
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Contraseña"
          placeholderTextColor="#fff"
          secureTextEntry
        />
        <Button title="Ingresar" color="orange" onPress={() => {
          router.push("/(tabs)");
        }} />
        <Link href={'/about'} style={styles.link}>¿Que es LabAdmin?</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  inputForm: {
    backgroundColor: "orange",
    width: "90%",
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
  },
  link: {
    color: 'orange',
    textDecorationLine: 'underline',
    fontSize: 16,
  }
});
