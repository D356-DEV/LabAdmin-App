import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  Modal,
  TextInput,
  ScrollView
} from "react-native";

const initialLabs = [
  { 
    id: '1', 
    name: 'Laboratorio de Quimica',
    available: true,
    materials: ['Tubos de ensayo', 'Microscopio', 'Mechero'],
    tables: 8
  },
  { 
    id: '2', 
    name: 'Laboratorio de Fotonica',
    available: true,
    materials: ['Láser', 'Lentes ópticos', 'Fibra óptica'],
    tables: 6
  },
  { 
    id: '3', 
    name: 'Laboratorio de Electrónica',
    available: true,
    materials: ['Osciloscopio', 'Multímetro', 'Protoboard'],
    tables: 10
  },
];

export default function Labs() {
  const [labs, setLabs] = useState(initialLabs);
  const [selectedLab, setSelectedLab] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newMaterial, setNewMaterial] = useState('');
  const [newTables, setNewTables] = useState('');

  const toggleLabAvailability = (labId) => {
    setLabs(labs.map(lab => 
      lab.id === labId 
        ? {...lab, available: !lab.available}
        : lab
    ));
  };

  const addMaterial = (labId) => {
    if (newMaterial.trim()) {
      setLabs(labs.map(lab =>
        lab.id === labId
          ? {...lab, materials: [...lab.materials, newMaterial.trim()]}
          : lab
      ));
      setNewMaterial('');
    }
  };

  const removeMaterial = (labId, materialIndex) => {
    setLabs(labs.map(lab =>
      lab.id === labId
        ? {...lab, materials: lab.materials.filter((_, index) => index !== materialIndex)}
        : lab
    ));
  };

  const updateTables = (labId) => {
    const tables = parseInt(newTables);
    if (!isNaN(tables) && tables > 0) {
      setLabs(labs.map(lab =>
        lab.id === labId
          ? {...lab, tables: tables}
          : lab
      ));
      setNewTables('');
    }
  };

  const renderLabDetails = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{selectedLab?.name}</Text>
          
          {/* Disponibilidad */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Estado:</Text>
            <TouchableOpacity 
              style={[
                styles.availabilityButton,
                { backgroundColor: selectedLab?.available ? '#4CAF50' : '#f44336' }
              ]}
              onPress={() => toggleLabAvailability(selectedLab?.id)}
            >
              <Text style={styles.availabilityText}>
                {selectedLab?.available ? 'Disponible' : 'No Disponible'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Materiales */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Materiales:</Text>
            <ScrollView style={styles.materialsList}>
              {selectedLab?.materials.map((material, index) => (
                <View key={index} style={styles.materialItem}>
                  <Text style={styles.materialText}>{material}</Text>
                  <TouchableOpacity 
                    onPress={() => removeMaterial(selectedLab.id, index)}
                    style={styles.removeButton}
                  >
                    <Text style={styles.removeButtonText}>X</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <View style={styles.addMaterialContainer}>
              <TextInput
                style={styles.input}
                value={newMaterial}
                onChangeText={setNewMaterial}
                placeholder="Nuevo material"
              />
              <TouchableOpacity 
                style={styles.addButton}
                onPress={() => addMaterial(selectedLab?.id)}
              >
                <Text style={styles.addButtonText}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Mesas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Mesas: {selectedLab?.tables}</Text>
            <View style={styles.addMaterialContainer}>
              <TextInput
                style={styles.input}
                value={newTables}
                onChangeText={setNewTables}
                placeholder="Número de mesas"
                keyboardType="numeric"
              />
              <TouchableOpacity 
                style={styles.addButton}
                onPress={() => updateTables(selectedLab?.id)}
              >
                <Text style={styles.addButtonText}>Actualizar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={labs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[
              styles.item,
              { borderLeftWidth: 5, borderLeftColor: item.available ? '#4CAF50' : '#f44336' }
            ]}
            onPress={() => {
              setSelectedLab(item);
              setIsModalVisible(true);
            }}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>Mesas: {item.tables}</Text>
          </TouchableOpacity>
        )}
      />
      {renderLabDetails()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  availabilityButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  availabilityText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  materialsList: {
    maxHeight: 150,
  },
  materialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 5,
    borderRadius: 5,
  },
  materialText: {
    fontSize: 16,
  },
  removeButton: {
    padding: 5,
  },
  removeButtonText: {
    color: '#f44336',
    fontWeight: 'bold',
  },
  addMaterialContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});