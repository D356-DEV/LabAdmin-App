import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const labSchedules = [
  {
    id: '1',
    name: 'Laboratorio de Química',
    schedule: [
      { day: 'Lunes', hours: '7:00 AM - 2:00 PM' },
      { day: 'Martes', hours: '10:00 AM - 4:00 PM' },
      { day: 'Miércoles', hours: '7:00 AM - 2:00 PM' },
      { day: 'Jueves', hours: '10:00 AM - 4:00 PM' },
      { day: 'Viernes', hours: '8:00 AM - 1:00 PM' }
    ]
  },
  {
    id: '2',
    name: 'Laboratorio de Fotónica',
    schedule: [
      { day: 'Lunes', hours: '2:00 PM - 8:00 PM' },
      { day: 'Martes', hours: '10:00 AM - 4:00 PM' },
      { day: 'Miércoles', hours: '2:00 PM - 8:00 PM' },
      { day: 'Jueves', hours: '7:00 AM - 1:00 PM' },
      { day: 'Viernes', hours: '10:00 AM - 4:00 PM' }
    ]
  },
  {
    id: '3',
    name: 'Laboratorio de Electrónica',
    schedule: [
      { day: 'Lunes', hours: '10:00 AM - 4:00 PM' },
      { day: 'Martes', hours: '7:00 AM - 1:00 PM' },
      { day: 'Miércoles', hours: '2:00 PM - 8:00 PM' },
      { day: 'Jueves', hours: '10:00 AM - 4:00 PM' },
      { day: 'Viernes', hours: '7:00 AM - 1:00 PM' }
    ]
  }
];

export default function Schedule() {
  const renderScheduleItem = ({ item: schedule }) => (
    <View style={styles.scheduleItem}>
      <Text style={styles.dayText}>{schedule.day}</Text>
      <Text style={styles.hoursText}>{schedule.hours}</Text>
    </View>
  );

  const renderLabItem = ({ item: lab }) => (
    <View style={styles.labContainer}>
      <Text style={styles.labName}>{lab.name}</Text>
      <View style={styles.scheduleContainer}>
        <FlatList
          data={lab.schedule}
          renderItem={renderScheduleItem}
          keyExtractor={(item) => item.day}
          scrollEnabled={false}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horarios de Laboratorios</Text>
      <FlatList
        data={labSchedules}
        renderItem={renderLabItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  listContainer: {
    padding: 16,
  },
  labContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  labName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2196F3',
  },
  scheduleContainer: {
    marginLeft: 8,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dayText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    width: 100,
  },
  hoursText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});