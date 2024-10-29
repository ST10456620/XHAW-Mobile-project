// ContactUs.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ContactUs: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (name && email && message) {
      // Here, you can add the logic to handle form submission, such as sending the data to a server or API.
      Alert.alert('Message Sent', 'Thank you for contacting us. We will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titleText}>Contact Us</Text>

        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Message Input */}
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write your message"
          value={message}
          onChangeText={setMessage}
          multiline={true}
        />

        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  sendButton: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#38b6ff',
    borderRadius: 10,
    padding: 15,
    shadowColor: 'grey',
    elevation: 5, // For Android shadow effect
    marginBottom: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactUs;