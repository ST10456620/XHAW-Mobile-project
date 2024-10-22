import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import logopic from '../assets/logopic.png'; 
import profileIcon from '../assets/profile.png'; 
import padlockIcon from '../assets/padlock.png'; 
import mailIcon from '../assets/mail.png'; 
import facebookIcon from '../assets/facebook.png'; 
import twitterIcon from '../assets/twitter.png'; 

const Login = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <ScrollView>

          {/* Logo */}
          <View style={styles.mainPicture}>
            <Image 
              style={styles.imageSize} 
              source={logopic} // Updated logo path to match the app's theme
            />
          </View>

          {/* Heading */}
          <View style={styles.container}>
            <Text style={styles.loginText}>Welcome Back!</Text>
            <Text style={styles.subText}>Login to continue learning</Text>
          </View>

          {/* TextInput and Icon container */}
          <View style={styles.textInputContainer}>

            {/* Username input with profile icon */}
            <View style={styles.inputContainers}>
              <Image 
                source={profileIcon} 
                style={styles.iconSizeOne}
              />
              <TextInput 
                placeholder='Enter your username'
                placeholderTextColor={'#808080'} // Softer placeholder color
                style={styles.inputStyle}
              />
            </View>

            {/* Password input with padlock icon */}
            <View style={styles.inputContainers}>
              <Image 
                source={padlockIcon} 
                style={styles.iconSizeOne}
              />
              <TextInput 
                placeholder='Enter your password'
                placeholderTextColor={'#808080'}
                secureTextEntry={true} // Enable secure input for passwords
                style={styles.inputStyle}
              />
            </View>

            {/* 'Forget your password' text */}
            <TouchableOpacity style={styles.textRight}>
              <Text style={styles.textRightFormat}>Forgot your password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonTextStyle}>Login</Text>
              </TouchableOpacity>
            </View>

            {/* Sign up text */}
            <View style={styles.container}>
              <Text style={styles.signupText}>Or sign in using</Text>

              {/* Icon container for social logins */}
              <View style={styles.iconContainer}>
                {/* Gmail icon */}
                <TouchableOpacity>
                  <Image 
                    source={mailIcon} 
                    style={styles.iconSizeTwo} 
                  />
                </TouchableOpacity>

                {/* Facebook icon */}
                <TouchableOpacity>
                  <Image 
                    source={facebookIcon} 
                    style={styles.iconSizeTwo} 
                  />
                </TouchableOpacity>

                {/* Twitter icon */}
                <TouchableOpacity>
                  <Image 
                    source={twitterIcon} 
                    style={styles.iconSizeTwo} 
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#38b6ff', // Gradient colors can be added here later
    },
    mainPicture: {
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 20,

    },
    imageSize: {
      width: 180,
      height: 180,
      alignItems: 'center'
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      width: '90%',
    },
    loginText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
      alignItems: 'center'
    },
    subText: {
      fontSize: 14,
      color: '#ffffff99',
      marginBottom: 30,
      alignItems: 'center'
    },
    textInputContainer: {
      width: '90%',
      marginBottom: 20,
      alignItems: 'center'
    },
    inputContainers: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 25,
      padding: 10,
      marginBottom: 15,
      backgroundColor: '#38b6ff', // Add slight transparency
    },
    iconSizeOne: {
      width: 24,
      height: 24,
      marginRight: 10,
      alignItems: 'center'
    },
    inputStyle: {
      flex: 1,
      fontSize: 16,
      color: '#fff',
      alignItems: 'center'
    },
    textRight: {
      marginBottom: 20,
      marginRight: 30,
      alignItems: 'center'
    },
    textRightFormat: {
      color: '#ffffff99', // Softer white for clickable text
      fontSize: 14,
      alignItems: 'center'
    },
    buttonContainer: {
      alignItems: 'center',
      marginBottom: 30,
      width: '100%',
    },
    buttonStyle: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 25,
      width: '80%',
      alignItems: 'center',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
    },
    buttonTextStyle: {
      color: '#38b6ff', // Matching the blue of the background for text
      fontSize: 16,
      fontWeight: '600',
      alignItems: 'center'
    },
    signupText: {
      fontSize: 14,
      color: '#ffffff99',
      marginBottom: 15,
      alignItems: 'center'
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
      alignSelf: 'center',
    },
    iconSizeTwo: {
      width: 50,
      height: 50,
    },
    twitterButton: {
      width: '100%',
      backgroundColor: '#1DA1F2',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 25,
      marginBottom: 20,
      alignItems: 'center',
    },
  });
  

export default Login;
