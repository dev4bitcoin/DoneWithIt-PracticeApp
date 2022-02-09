import React, { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from '../components/forms'
import auth from '../api/auth';
import useAuth from '../auth/useAuth';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    const { logIn } = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await auth.login(email, password);
        if (!result.ok) {
            return setLoginFailed(true);
        }

        setLoginFailed(false);
        logIn(result.data)
    }

    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
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
                <SubmitButton title="Login" />

            </AppForm>

        </Screen>
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

export default LoginScreen;