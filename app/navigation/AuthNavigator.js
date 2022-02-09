import React from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from '../screens/WelcomeScreen';


const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator initialRouteName="Tweets">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;