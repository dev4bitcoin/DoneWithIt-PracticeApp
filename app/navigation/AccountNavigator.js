import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();
const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="AccountPage" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;