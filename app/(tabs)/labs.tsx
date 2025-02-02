import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const labs = [
  { id: '1', name: 'Laboratorio de Computación 1' },
  { id: '2', name: 'Laboratorio de Computación 2' },
  { id: '3', name: 'Laboratorio de Electrónica' },
];

export default function Labs() {
  return (
    <View style={styles.container}>
      <FlatList
        data={labs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});