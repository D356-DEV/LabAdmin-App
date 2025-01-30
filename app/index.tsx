import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { Link } from "expo-router";
import Logo from "@/components/Logo";

export default function Index() {
  return (
    <View>
      <Link href={'/about'} style={{textDecorationLine: 'underline', color: 'blue'}}>About</Link>
      <Logo />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputForm}
          placeholder="Identifier"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry
        />
        <Button title="Log In" color="orange" />
      </View>
    </View>
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
});
