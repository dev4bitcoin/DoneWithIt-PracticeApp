import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import AppText from './AppText';

import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon name={item.icon} size={70} backgroundColor={item.color} />
                <AppText style={styles.text}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        width: 130

    },
    text: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem;