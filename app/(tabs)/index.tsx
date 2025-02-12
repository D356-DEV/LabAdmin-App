import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Home() {
  const menuItems = [
    {
      title: "Horarios de Laboratorio",
      description: "Consulta los horarios disponibles de los laboratorios",
      route: "/schedule",
      icon: "🕒"
    },
    {
      title: "Asistente Virtual",
      description: "Resuelve tus dudas con nuestro chatbot",
      route: "/bot",
      icon: "💬"
    },
    {
      title: "Practicas",
      description: "¿Listo para tu siguiente practica?",
      route: "/horario",
      icon: "📅"
    },
    {
      title: "Recursos",
      description: "Manuales y documentación de laboratorio",
      route: "/resources",
      icon: "📚"
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/UDG.png")}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>LabAdmin UDG</Text>
      </View>

      {/* Welcome Banner */}
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>Bienvenido al Sistema de Administración de Laboratorios</Text>
        <Text style={styles.semesterText}>Ciclo Escolar 2024A</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <View style={styles.menuGrid}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => router.push(item.route)}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Announcements Section */}
        <View style={styles.announcementsSection}>
          <Text style={styles.sectionTitle}>Avisos Importantes</Text>
          <View style={styles.announcement}>
            <Text style={styles.announcementTitle}>Mantenimiento Programado</Text>
            <Text style={styles.announcementText}>
              El laboratorio de Química estará cerrado el próximo viernes por mantenimiento.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Universidad de Guadalajara © 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1E4D8C',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  banner: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  semesterText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  menuItem: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  menuIcon: {
    fontSize: 24,
    marginBottom: 10,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E4D8C',
    marginBottom: 8,
  },
  menuDescription: {
    fontSize: 12,
    color: '#666',
  },
  announcementsSection: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  announcement: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  announcementText: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    backgroundColor: '#1E4D8C',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});