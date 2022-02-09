import React, { useEffect } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditingScreen from "../screens/ListingEditingScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator} options={{
                tabBarIcon: ({ size, color }) =>
                    <MaterialCommunityIcons name="home" size={size} color={color}
                    />,
                headerShown: false
            }}>

            </Tab.Screen>
            <Tab.Screen
                name="ListingEdit"
                component={ListingEditingScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
                    tabBarIcon: ({ size, color }) =>
                        <MaterialCommunityIcons name="plus-circle" size={size} color={color}
                        />,
                    headerShown: false
                })}
            />
            <Tab.Screen
                name="Account"
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialCommunityIcons name="account" size={size} color={color}
                        />,
                    headerShown: false
                }}
            />
        </Tab.Navigator >
    )
}

export default AppNavigator;