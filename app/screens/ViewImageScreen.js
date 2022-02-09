import React from 'react';
import { Image, StyleSheet, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Colors from "../config/colors"

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image resizeMode='contain' style={styles.image} source={require("../assets/chair.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        top: 40,
        left: 30,
        position: "absolute"
    },
    deleteIcon: {
        top: 40,
        right: 30,
        position: "absolute"
    },
    container: {
        backgroundColor: "black",
        flex: 1
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;