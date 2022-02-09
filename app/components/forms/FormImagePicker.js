import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
    const { values, errors, setFieldValue, touched } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri])
    }

    const handleDelete = (uri) => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri != uri))
    }

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleDelete} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default FormImagePicker;