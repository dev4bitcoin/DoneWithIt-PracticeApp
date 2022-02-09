import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const key = "authToken";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    }
    catch (ex) {
        console.log('Error storing auth Token');
    }
}

const getUser = async () => {
    const token = await getToken();
    if (token) return jwtDecode(token)
    return null;
}

const getToken = async () => {
    try {
        const authToken = await SecureStore.getItemAsync(key);
        return authToken;
    }
    catch (ex) {
        console.log('Error getting the auth Token');
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);

    }
    catch (ex) {
        console.log('Error removing the auth Token');
    }
}

export default {
    removeToken,
    storeToken,
    getUser,
    getToken
}