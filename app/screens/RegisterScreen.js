import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from '../components/forms'
import userApi from '../api/users';
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function RegisterScreen(props) {
    const registerApi = useApi(userApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);
        if (!result.ok) {
            if (result.data) {
                setError(result.data.error);
            }
            else {
                setError("An expected error occured");
                console.log(result)
            }
            return;
        }
        const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);
        auth.logIn(authToken);
    }

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>

                <AppForm
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                    <ErrorMessage error={error} visible={error} />
                    <AppFormField
                        name="name"
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon="account"
                        placeholder="Name"
                        textContentType="name"

                    />

                    <AppFormField
                        name="email"
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        placeholder="Email"
                        textContentType="emailAddress"

                    />

                    <AppFormField
                        name="password"
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon="lock"
                        secureTextEntry
                        placeholder="Password"
                        textContentType="password"
                    />
                    <SubmitButton title="Register" />

                </AppForm>

            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    container: {
        margin: 10
    }
})

export default RegisterScreen;