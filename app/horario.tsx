import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function horario() {
  const scheduleData = {
    "Martes": [
      {
        time: "12:00 PM",
        class: "Laboratorio",
        location: "Laboratorio de fotonica"
      }
    ]
  };

  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Horario de Clases</Text>
      
      {daysOfWeek.map((day) => (
        <View key={day} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>{day}</Text>
          {scheduleData[day] ? (
            scheduleData[day].map((session, index) => (
              <View key={index} style={styles.classBlock}>
                <Text style={styles.timeText}>{session.time}</Text>
                <Text style={styles.classText}>{session.class}</Text>
                <Text style={styles.locationText}>{session.location}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noClassText}>No hay clases</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  dayContainer: {
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E88E5',
  },
  classBlock: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  classText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  noClassText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 10,
  },
});