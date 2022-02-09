import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
    <Stack.Navigator
        mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;