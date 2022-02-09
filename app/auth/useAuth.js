import React, { useContext } from 'react';
import jwtDecode from 'jwt-decode'

import AuthContext from '../auth/context';
import authStorage from '../auth/storage'

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    const logIn = (authToken) => {
        const user = jwtDecode(authToken)
        setUser(user);
        authStorage.storeToken(authToken);
    }

    return { user, logOut, logIn };
}

