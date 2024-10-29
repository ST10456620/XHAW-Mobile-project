import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import logopic from '../assets/logopic.png'; 
import profileIcon from '../assets/profile.png'; 
import padlockIcon from '../assets/padlock.png'; 
import mailIcon from '../assets/mail.png'; 
import facebookIcon from '../assets/facebook.png'; 
import twitterIcon from '../assets/twitter.png'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from '../Navigation/StackNav/Stack';

type propsType= NativeStackScreenProps<stackScreens, "Login">

const Login = (props:propsType) => {

  const{navigation} = props;

  const gotoLogin = () => { navigation.navigate("HomeEntry");};


    return(
      <View style={styles.background}>
        <SafeAreaView>
          <ScrollView>
  
            {/* Logo */}
            <View style ={styles.mainPicture}>
              <Image 
              style ={styles.imageSize}
              source={require('../assets/logopic.png')}/>
            </View>
  
            {/* Heading */}
            <View style ={styles.container}>
              <Text style ={styles.loginText}> Login </Text>
            </View>
  
          {/* TextInput and Icon container */}
          <View style={styles.textInputContainer}>
  
            {/* Username input with profile icon */}
            <View style={styles.inputContainers} >
              <Image 
              source={require('../assets/profile.png')}
              style={styles.iconSizeOne}/>
              
            <TextInput 
              placeholder='Enter your username'
              placeholderTextColor={'black'}
              style ={styles.inputStyle}/>
            </View>
  
          
            {/* Password input with padlock icon */}
            <View style={styles.inputContainers}>
              <Image 
              source={require('../assets/padlock.png')}
              style={styles.iconSizeOne}/>
  
              
              <TextInput 
              placeholder='Enter your password'
              placeholderTextColor={'black'}
              style ={styles.lastInputstyle}/>
            </View>
  
            {/* 'Forget your password' text */}
            <TouchableOpacity style={styles.textRight}>
              <Text style={styles.textRightFormat}>Forgot your password?</Text>
            </TouchableOpacity>
  
            {/* Button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
              style={styles.buttonStyle}
              onPress={gotoLogin}>
                <Text style={styles.buttonTextStyle}>Login</Text>
              </TouchableOpacity>
            </View>
  
            {/* Sign up text */}
            <View style={styles.container}>
              <Text style={styles.signupText}>Sign up using</Text>
  
              {/* icon container */}
              <View style={styles.iconContainer}>
  
                {/* Gmail icon */}
                <TouchableOpacity>
                  <Image 
                  source={require('../assets/mail.png')}
                  style={styles.iconSizeTwo}/>
                </TouchableOpacity>
  
                {/* Facebook icon*/}
                <TouchableOpacity>
                  <Image 
                  source={require('../assets/facebook.png')}
                  style={styles.iconSizeTwo}/>
                </TouchableOpacity>
  
                {/* Twitter icon */}
                <TouchableOpacity>
                  <Image 
                  source={require('../assets/twitter.png')}
                  style={styles.iconSizeTwo}/>
                </TouchableOpacity>
              </View>
            </View>
          
          </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 45,
  },
  selectListContainer: {
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'column',
    marginBottom: 45
  },
  selectListStyle: {
    backgroundColor: '#CECECE',
    marginBottom: 50
  },
  coursesContainer: {
    paddingTop: 20,
  },
  coursesHeading: {
    fontSize: 25,
  },
  aboutUsContainer: {
    paddingTop: 20,
    backgroundColor: 'black',
    paddingBottom: 20
  },
  homeTextContainer: {
    marginLeft: 25,
    marginRight: 25,
    paddingBottom: 25
  },
  aboutUsHeading: {
    color: '#ddd7d6',
    fontSize: 25,
  },
 
  aboutUsParagraph: {
    color: '#ddd7d6',
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    paddingTop: 15,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  buttonStyle: {
    backgroundColor: '#000000',
    borderWidth: 3,
    height: 60,
    borderRadius: 6,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#38b6ff', 
  },
  textInputContainer: {
    marginLeft: 50,
    marginRight: 50,
  },
  inputContainers: {
    flexDirection: 'row'
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 25,
  },
  imageSize: {
    height: 350,
    width: 350,
  },
  iconSizeOne: {
    width: 25,
    height: 25,
  },
  iconSizeTwo: {
    width: 60,
    height: 60,
    marginLeft: 55
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
    fontSize: 35,
  },
  mainPicture: {
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 30,
    marginLeft: 15,
    paddingEnd: 330,
  },
  lastInputstyle: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 10,
    marginLeft: 15,
    paddingEnd: 330,
  },
  textRight: {
    alignItems: 'flex-end'
  },
  textRightFormat: {
    fontSize: 15,
  },
  signupText: {
    fontSize: 35,
  },
  });
  

export default Login;
