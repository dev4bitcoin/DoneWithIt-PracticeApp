import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';


import AppText from '../AppText';

function ErrorMessage({ error, visible }) {
    if (!error || !visible) {
        return null;
    }
    return (
        <AppText style={{ color: 'red' }}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.danger
    }
})
export default ErrorMessage;