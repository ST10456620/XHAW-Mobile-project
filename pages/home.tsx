import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, GestureResponderEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import firstAidMain from '../assets/firstAid.png';
import secondImage from '../assets/childMinding.png'; 
import thirdImage from '../assets/cooking.png';
import fourthImage from '../assets/garden.png';
import fifthImage from '../assets/lifeSkills.png';
import sixthImage from '../assets/sewing.png';
import seventhImage from '../assets/landScaping.png';
import logo from '../assets/logo.png';
import Button from '../Calculator/Button';
import { CheckBox } from '../Calculator';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';


const images = [
  { source: firstAidMain, title: 'First Aid' },
  { source: secondImage, title: 'Child Minding' },
  { source: thirdImage, title: 'Cooking' },
  { source: fourthImage, title: 'Garden maintenance' },
  { source: fifthImage, title: 'Life Skills' },
  { source: sixthImage, title: 'Sewing' },
  { source: seventhImage, title: 'Landscaping' },
];

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleImageClick = (title: string) => {
    navigation.navigate('Detail', { title });
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  {/*Array storage where it later display the label*/}
  const [courses, setCourses] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={logo} style={styles.logo} />

        {/* Six months Horizontal Scrollable Images */}

        <Text style={styles.titleText}>Courses:</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollImagesContainer}
        >
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => handleImageClick(image.title)}>
              <View style={styles.imageContainer}>
                <Image source={image.source} style={styles.image} />
                <View style={styles.textOverlay}>
                  <Text style={styles.imageText}>{image.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>


        {/* About Us Section */}
        <View style={styles.aboutUsContainer}>
          <Text style={styles.aboutUsHeading}>About Us:</Text>
          <Text style={styles.aboutUsParagraph}>
            Empowering the Nation, which was established in Johannesburg in 2018 by Precious Radebe, develops the skills of domestic workers and gardeners. Our six-week Short Skills Training Programs and six-month Learnerships give learners the real skills they need to pursue higher-paying careers and become more employable. Precious is motivated to create chances for people without formal education because of her family's history. We consider skills to be fundamental to both individual development and community improvement.
          </Text> 
        </View>
    
    <View style={styles.dropdowncontainer}>
    <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        <Text style={styles.dropdownLabel}>Discount</Text>
      </TouchableOpacity>
      
      {isDropdownVisible && (
        <View style={styles.discountContainer}>
          <Text style={styles.discountItem}>• One course – no discount</Text>
          <Text style={styles.discountItem}>• Two courses – 5% discount</Text>
          <Text style={styles.discountItem}>• Three courses – 10% discount</Text>
          <Text style={styles.discountItem}>• More than three courses – 15% discount</Text>
        </View>
      )}
    </View>
    
    {/*Calculator*/}
    <View style={styles.CalculatorContainer}>
    {/*Heading*/}
  <Text style={styles.mainHeader}>Total and discount calculator</Text>

    {/*Sub-Heading*/}
  <Text style={styles.header}>Choose all the following course(s):</Text>


        {/* Label is used to display the name and value is the name that goes to the server*/}
      <CheckBox 
      options={[
        {label: "First Aid: R1500", value: "FirstAid"},
        {label: "Sewing: R1500", value: "Sewing"},
        {label: "Landscaping: R1500", value: "Landscaping"},
        {label: "Life Skill: R1500", value: "LifeSkill"},
        {label: "Child Minding: R750", value: "ChildMinding"},
        {label: "Cooking: R750", value: "Cooking"},
        {label: "Garden: R750", value: "Garden"},
        ]}
        checkedValues={courses}
        onChange={setCourses}
        />

      <Button
      onPress={() => {
        alert(`Chosen course(s): ${courses}`);
      }}
      >Submit</Button>
    </View>
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
  scrollImagesContainer: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    position: 'relative',
    marginRight: 20,
    marginBottom: 20,
  },
  image: {
    width: 170,
    height: 250,
    borderRadius: 10,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  imageText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: -20,
    marginBottom: 0,
    borderRadius: 10,
  },
  aboutUsContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginVertical: 15,
  },
  aboutUsHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  aboutUsParagraph: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  picker: {
    height: 50,
    width: 250,
  },
  discountText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50', // Green for discount text
  },
  confirmButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,

    marginBottom: 10,
    textAlign: 'center',
  },
  dropdowncontainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  dropdown: {
    backgroundColor: '#38b6ff',
    borderRadius: 10,
    padding: 15,
    shadowColor: 'grey',
    elevation: 5, // For Android shadow effect
    marginBottom: 10,
  },
  dropdownLabel: {
    fontSize: 16,
    textAlign: 'center',
  },
  discountContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'grey',
    elevation: 5, // For Android shadow effect
  },
  discountItem: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  CalculatorContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: "center",
    paddingHorizontal: 25,
    marginTop: 35,
    marginBottom: 25,
  },
  mainHeader: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#06b6d4" + "ee",
    textTransform: "uppercase",
  },
  header: {
    marginBottom: 15,
    fontSize: 16,
    color: "#374151"
  },
});



export default Home;
