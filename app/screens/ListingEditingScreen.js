import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
//import * as Location from "expo-location"

import Screen from '../components/Screen';
import { AppFormField, SubmitButton, AppForm } from '../components/forms'
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import PickerItem from '../components/PickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingApi from '../api/listings'
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Password"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select atleast one image")
})

const categories = [
    { label: "Furniture", value: 1, icon: 'floor-lamp', color: '#fc5c65' },
    { label: "Cars", value: 2, icon: 'car', color: '#fd9644' },
    { label: "Cameras", value: 3, icon: 'camera', color: '#fed330' },
    { label: "Games", value: 4, icon: 'cards', color: '#26de81' },
    { label: "Clothing", value: 5, icon: 'shoe-heel', color: '#2bcbba' },
    { label: "Sports", value: 6, icon: 'basketball', color: '#45aaf2' },
    { label: "Movies & Music", value: 7, icon: 'headphones', color: '#4b7bec' },
    { label: "Books", value: 8, icon: 'basketball', color: '#26de81' },
    { label: "Other", value: 9, icon: 'camera', color: '#fd9644' },
]

function ListingEditingScreen(props) {
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);

        const result = await listingApi.addListing({ ...listing }, progress => setProgress(progress));

        if (!result.ok) {
            setUploadVisible(false);
            return alert('Could not post listing.')
        }
        alert('success')
        resetForm();
    }

    return (
        <Screen style={styles.container}>
            <UploadScreen visible={uploadVisible} progress={progress} onDone={() => setUploadVisible(false)} />
            <AppForm
                initialValues={{ title: '', price: '', description: '', category: null, images: [] }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>

                <FormImagePicker
                    name="images"
                />

                <AppFormField
                    name="title"
                    maxLength={255}
                    placeholder="Title"
                />

                <AppFormField
                    name="price"
                    keyboardType="numeric"
                    maxLength={8}
                    placeholder="Price"
                    width={120}
                />

                <AppFormPicker
                    name="category"
                    items={categories}
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"

                />

                <AppFormField
                    name="description"
                    multiline
                    maxLength={255}
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />

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

export default ListingEditingScreen;