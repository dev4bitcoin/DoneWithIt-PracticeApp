import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={10}
            source={require("../assets/background.jpg")}
            resizeMode="cover"
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Login"
                    onPress={() => navigation.navigate("Login")} />
                <AppButton
                    title="Register"
                    color='secondary'
                    onPress={() => navigation.navigate("Register")} />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})
export default WelcomeScreen;