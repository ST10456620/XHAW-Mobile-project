import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const Button = (props) => {
  return (
    <TouchableOpacity
    style={styles.container} {...props}>
        <Text style={styles.text}>{props.children + " "}</Text>
        <MaterialIcons
        name={"check-circle"}
        size={20}
        color={"#f9fafb"}/>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#58bb43" + "cc",  
    },
    text: {
        fontSize: 16,
        color: "#f9fafb"
    },
})