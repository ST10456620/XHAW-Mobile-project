import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CheckBox = ({ options, checkedValues, onChange, style }) => {
    let updatedCheckValues = [...checkedValues];

    return (
        <View style={[styles.container, style]}>
            {options.map((option) => {
                const active = updatedCheckValues.includes(option.value);

                return (
                    <TouchableOpacity
                        style={active ? [styles.checkBox, styles.activeCheckBox] : styles.checkBox}
                        onPress={() => {
                            if (active) {
                                updatedCheckValues = updatedCheckValues.filter(
                                    (checkedValue) => checkedValue !== option.value
                                );
                                return onChange(updatedCheckValues);
                            }
                            updatedCheckValues.push(option.value);
                            onChange(updatedCheckValues);
                        }}
                        key={option.value}
                    >
                        <MaterialIcons
                            name={active ? "check-box" : "check-box-outline-blank"}
                            size={24}
                            color={active ? "#06b6d4" : "#64748b"}
                        />
                        <Text style={active ? [styles.text, styles.activeText] : styles.text}>{option.label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

// Styles for CheckBox
const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    checkBox: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    activeCheckBox: {
        backgroundColor: "#58bb43" + "65"
    },
    text: {
        fontSize: 16,
        marginLeft: 15,
        color: '#6b7280',
    },
    activeText: {
        color: '#374151',
    },
});

export default CheckBox;
