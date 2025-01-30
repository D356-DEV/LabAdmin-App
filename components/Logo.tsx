import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image source={require("@/assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>LabAdmin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
});
