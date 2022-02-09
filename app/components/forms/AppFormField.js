import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
    const { errors, setFieldTouched, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppTextInput
                width={width}
                onBlur={() => setFieldTouched("name")}
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;