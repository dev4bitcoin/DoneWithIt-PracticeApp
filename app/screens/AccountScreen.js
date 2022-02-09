import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    },
]

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    image={require("../assets/icon.png")}
                    title={user.name}
                    subTitle={user.email}
                ></ListItem>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor} />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                onPress={() => logOut()}
                ImageComponent={
                    <Icon
                        name="logout"
                        backgroundColor="#ffe66d" />
                }
            />
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25
    },
    main: {
        backgroundColor: colors.light,
        flex: 1
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;