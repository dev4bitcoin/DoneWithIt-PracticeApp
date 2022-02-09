import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import defaultStyles from '../config/Styles'
import AppText from './AppText';
import { useState } from 'react/cjs/react.development';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({ icon, placeholder, items, selectedItem, PickerItemComponent = PickerItem, numberOfColumns = 1, onSelectedItem, width = '100%', ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon} />}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                    <FlatList
                        style={styles.list}
                        data={items}
                        numColumns={numberOfColumns}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectedItem(item)
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        justifyContent: "center",
        alignSelf: "center"
    },
    text: {
        flex: 1,
    },
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium
    },
    list: {
        flexDirection: "column",
        flex: 1
    }
})

export default AppPicker;