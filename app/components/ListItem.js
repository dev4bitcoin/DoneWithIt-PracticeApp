import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import defaultStyles from '../config/Styles'
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, image, onPress, renderRightActions, ImageComponent, showChevrons }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {ImageComponent}
                    {image &&
                        <Image style={styles.image} source={image}></Image>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={2}>{title}</AppText>
                        {subTitle &&
                            <AppText style={styles.subTitle} numberOfLines={3}>{subTitle}</AppText>}
                    </View>
                    {showChevrons &&
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    }
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500"
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    },
    icon: {
        justifyContent: "center",
        alignSelf: "center"
    },
})

export default ListItem;