import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import AppPicker from '../AppPicker';

function AppFormPicker({ items, name, PickerItemComponent, numberOfColumns, placeholder, width }) {
    const { values, errors, setFieldValue, touched } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                width={width}
                numberOfColumns={numberOfColumns}
                onSelectedItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;