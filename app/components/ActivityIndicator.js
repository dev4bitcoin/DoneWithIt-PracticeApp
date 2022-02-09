import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';


function ActivityIndicator({ visible = false }) {
    if (!visible)
        return null;
    return (
        <View style={styles.overlay}>
            <AnimatedLottieView
                autoPlay
                loop
                source={require("../assets/animations/loader.json")} />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 1,
        opacity: 0.8,
    }
})
export default ActivityIndicator;