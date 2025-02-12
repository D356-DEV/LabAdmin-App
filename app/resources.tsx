import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  FlatList,
  Modal,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import { router } from "expo-router";

const photonicsCourses = [
  {
    id: '1',
    name: 'Óptica Básica',
    materials: [
      { id: '1', type: 'instructivo', title: 'Manual de Prácticas de Laboratorio', file: 'manual_optica.pdf' },
      { id: '2', type: 'material', title: 'Guía de Uso del Interferómetro', file: 'guia_interferometro.pdf' }
    ]
  },
  {
    id: '2',
    name: 'Fibra Óptica y Comunicaciones',
    materials: [
      { id: '3', type: 'instructivo', title: 'Protocolo de Empalmes', file: 'protocolo_empalmes.pdf' }
    ]
  },
  {
    id: '3',
    name: 'Láser y Aplicaciones',
    materials: [
      { id: '4', type: 'instructivo', title: 'Normas de Seguridad Láser', file: 'seguridad_laser.pdf' },
      { id: '5', type: 'material', title: 'Calibración de Equipos', file: 'calibracion.pdf' }
    ]
  },
  {
    id: '4',
    name: 'Procesamiento Óptico de Señales',
    materials: []
  },
  {
    id: '5',
    name: 'Sensores Ópticos',
    materials: [
      { id: '6', type: 'material', title: 'Catálogo de Sensores', file: 'catalogo_sensores.pdf' }
    ]
  }
];

export default function resources() {
  const [courses, setCourses] = useState(photonicsCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newMaterial, setNewMaterial] = useState({
    title: '',
    type: 'material',
    file: ''
  });

  const addMaterial = () => {
    if (!newMaterial.title || !newMaterial.file) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    setCourses(courses.map(course => {
      if (course.id === selectedCourse.id) {
        return {
          ...course,
          materials: [...course.materials, {
            id: Date.now().toString(),
            ...newMaterial
          }]
        };
      }
      return course;
    }));

    setNewMaterial({ title: '', type: 'material', file: '' });
    setIsModalVisible(false);
  };

  const renderMaterial = ({ item }) => (
    <View style={styles.materialItem}>
      <View style={styles.materialInfo}>
        <Text style={styles.materialTitle}>{item.title}</Text>
        <Text style={styles.materialType}>
          {item.type === 'instructivo' ? '📋 Instructivo' : '📚 Material'}
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.downloadButton}
        onPress={() => Alert.alert('Descarga', `Descargando ${item.file}`)}
      >
        <Text style={styles.downloadButtonText}>⬇️</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCourse = ({ item }) => (
    <TouchableOpacity 
      style={styles.courseCard}
      onPress={() => {
        setSelectedCourse(item);
        setIsModalVisible(true);
      }}
    >
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.materialCount}>
        {item.materials.length} {item.materials.length === 1 ? 'recurso' : 'recursos'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.title}>Recursos de Fotónica</Text>
      </View>

      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.coursesList}
      />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedCourse?.name}</Text>
            
            <ScrollView style={styles.materialsList}>
              {selectedCourse?.materials.map(material => (
                <View key={material.id} style={styles.materialItem}>
                  <View style={styles.materialInfo}>
                    <Text style={styles.materialTitle}>{material.title}</Text>
                    <Text style={styles.materialType}>
                      {material.type === 'instructivo' ? '📋 Instructivo' : '📚 Material'}
                    </Text>
                  </View>
                  <TouchableOpacity 
                    style={styles.downloadButton}
                    onPress={() => Alert.alert('Descarga', `Descargando ${material.file}`)}
                  >
                    <Text style={styles.downloadButtonText}>⬇️</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            <View style={styles.addMaterialSection}>
              <Text style={styles.addMaterialTitle}>Agregar Nuevo Recurso</Text>
              
              <TextInput
                style={styles.input}
                placeholder="Título del recurso"
                value={newMaterial.title}
                onChangeText={text => setNewMaterial({...newMaterial, title: text})}
              />

              <View style={styles.typeSelector}>
                <TouchableOpacity 
                  style={[
                    styles.typeButton,
                    newMaterial.type === 'material' && styles.typeButtonSelected
                  ]}
                  onPress={() => setNewMaterial({...newMaterial, type: 'material'})}
                >
                  <Text style={styles.typeButtonText}>Material</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[
                    styles.typeButton,
                    newMaterial.type === 'instructivo' && styles.typeButtonSelected
                  ]}
                  onPress={() => setNewMaterial({...newMaterial, type: 'instructivo'})}
                >
                  <Text style={styles.typeButtonText}>Instructivo</Text>
                </TouchableOpacity>
              </View>

              <TextInput
                style={styles.input}
                placeholder="Nombre del archivo (ej: manual.pdf)"
                value={newMaterial.file}
                onChangeText={text => setNewMaterial({...newMaterial, file: text})}
              />

              <View style={styles.modalButtons}>
                <TouchableOpacity 
                  style={styles.cancelButton}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.addButton}
                  onPress={addMaterial}
                >
                  <Text style={styles.addButtonText}>Agregar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 48,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  coursesList: {
    padding: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E4D8C',
    marginBottom: 8,
  },
  materialCount: {
    fontSize: 14,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E4D8C',
  },
  materialsList: {
    maxHeight: 200,
    marginBottom: 20,
  },
  materialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 8,
  },
  materialInfo: {
    flex: 1,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  materialType: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  downloadButton: {
    padding: 8,
  },
  downloadButtonText: {
    fontSize: 20,
  },
  addMaterialSection: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
  },
  addMaterialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  typeSelector: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  typeButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#2196F3',
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  typeButtonSelected: {
    backgroundColor: '#2196F3',
  },
  typeButtonText: {
    color: '#2196F3',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#666',
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});