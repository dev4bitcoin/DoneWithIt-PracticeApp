import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache'
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import useNotification from '../hooks/useNotification';


function ListingDetailsScreen({ route }) {
    const [message, setMessage] = useState('')
    const listing = route.params;

    const handleSubmit = () => {
        if (!message) return;

        //useNotification().showLocalNotification("Message from user", message)
    }

    return (
        <View>
            <Image
                style={styles.image}
                uri={listing.images[0].url}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
            ></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/icon.png")}
                        title="Vivek Perumal"
                        subTitle="5 Listings"
                    ></ListItem>
                </View>
            </View>

            <View style={styles.messagesContainer}>
                <AppTextInput
                    name="message"
                    maxLength={255}
                    placeholder="Message..."
                    title={message}
                    onTe
                />
                <AppButton
                    title="Contact Seller"
                    onPress={handleSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontWeight: "500",
        fontSize: 24
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 10
    },
    messagesContainer: {
        padding: 10
    }
})

export default ListingDetailsScreen;