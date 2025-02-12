import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { router } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Logo UDG (placeholder) */}
      <Image
        source={require("@/assets/images/UDG.png")}
        style={styles.logo}
      />
      
      {/* Profile Photo */}
      <View style={styles.profilePhotoContainer}>
        <Image
          source={require("@/assets/images/Yo.jpg")}
          style={styles.profilePhoto}
        />
      </View>

      {/* Student Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Perfil del Estudiante</Text>
        <Text style={styles.info}>Código: 215691301</Text>
        <Text style={styles.info}>Universidad de Guadalajara</Text>
        <Text style={styles.info}>Ingeniería en Computación (INCO)</Text>
        <Text style={styles.info}>Semestre: 8</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 60,
    height: 60,
  },
  profilePhotoContainer: {
    marginTop: 60,
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
});