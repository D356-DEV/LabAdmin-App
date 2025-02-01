import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";

export default function bot() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      const userMessage = { id: conversation.length + 1, text: message, user: true };
      setConversation([...conversation, userMessage]);

      // Simulación de respuesta del bot
      let botResponse = "";
      if (message.toLowerCase().includes("encargado")) {
        botResponse = "El encargado actual es el Profesor Juan Pérez.";
      } else if (message.toLowerCase().includes("horario")) {
        botResponse = "El horario de los laboratorios es de 8:00 AM a 8:00 PM.";
      } else {
        botResponse = "Lo siento, no entiendo tu pregunta.";
      }

      const botMessage = { id: conversation.length + 2, text: botResponse, user: false };
      setConversation([...conversation, userMessage, botMessage]);
      setMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {conversation.map((msg) => (
          <View key={msg.id} style={msg.user ? styles.userMessage : styles.botMessage}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Enviar" onPress={handleSend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatContainer: {
    flex: 1,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
});