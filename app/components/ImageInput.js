import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
            alert("You need to enable to access camera")
        }
    }

    useEffect(() => {
        requestPermission();
    }, []);
    const handlePress = () => {
        if (!imageUri)
            selectImage();
        else
            Alert.alert('Delete', 'Are you sure you want to delete image?',
                [{ text: 'Yes', onPress: () => onChangeImage(null) }, { text: "No" }])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled)
                onChangeImage(result.uri)
        } catch (error) {
            console.log('Error loadoing on image', error)
        }
    }


    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons name='camera' size={30} />)}
                {imageUri &&
                    <Image style={styles.image} source={{ uri: imageUri }} />}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flexDirection: 'row'
    // },
    container: {
        backgroundColor: colors.light,
        height: 100,
        width: 100,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        height: "100%",
        width: "100%",
    }
});

export default ImageInput;