import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';


const courses = [
  { label: "First Aid: R1500", value: "FirstAid", price: 1500 },
  { label: "Sewing: R1500", value: "Sewing", price: 1500 },
  { label: "Landscaping: R1500", value: "Landscaping", price: 1500 },
  { label: "Cooking: R750", value: "Cooking", price: 750 },
  { label: "Child Minding: R750", value: "ChildMinding", price: 750 },
  { label: "Garden Maintenance: R750", value: "Garden", price: 750 },
];

// Rename App to Enroll
const Enroll: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [contactDetails, setContactDetails] = useState({ name: '', phone: '', email: '' });

  const handleCourseSelection = (value: string) => {
    setSelectedCourses(prev => 
      prev.includes(value) ? prev.filter(course => course !== value) : [...prev, value]
    );
  };

  const calculateTotal = () => {
    const total = selectedCourses.reduce((acc, course) => {
      const courseDetail = courses.find(c => c.value === course);
      return acc + (courseDetail ? courseDetail.price : 0);
    }, 0);

    const discount = selectedCourses.length === 1 ? 0 :
                     selectedCourses.length === 2 ? 0.05 :
                     selectedCourses.length === 3 ? 0.10 : 0.15;

    const discountedTotal = total * (1 - discount);
    const totalWithVAT = discountedTotal * 1.15; // Adding 15% VAT

    Alert.alert("Total Fee", `Your total fee is: R${totalWithVAT.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Details</Text>
      <TextInput placeholder="Name" style={styles.input} onChangeText={text => setContactDetails({ ...contactDetails, name: text })} />
      <TextInput placeholder="Phone" style={styles.input} onChangeText={text => setContactDetails({ ...contactDetails, phone: text })} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={text => setContactDetails({ ...contactDetails, email: text })} />

      <Text style={styles.header}>Select Courses</Text>
      {courses.map(course => (
        <CheckBox
          key={course.value}
          title={course.label}
          checked={selectedCourses.includes(course.value)}
          onPress={() => handleCourseSelection(course.value)}
        />
      ))}

      <TouchableOpacity style={styles.button} onPress={calculateTotal}>
        <Text style={styles.buttonText}>Calculate Total</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#11c21f', // Changed from #007BFF to #11c21f
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


// Correctly export Enroll component
export default Enroll;
