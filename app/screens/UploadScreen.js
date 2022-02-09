import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';

import AnimatedLottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';

function UploadScreen({ progress = 0, visible = false, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {/* <AppText>{progress * 100}%</AppText> */}
                {progress < 1 ? (
                    <Progress.Bar color={colors.primary} progress={progress} width={200} />)
                    : (<AnimatedLottieView
                        autoPlay
                        loop={false}
                        style={styles.animation}
                        onAnimationFinish={onDone}
                        source={require("../assets/animations/done.json")} />
                    )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    animation: {
        width: 150
    }
});

export default UploadScreen;