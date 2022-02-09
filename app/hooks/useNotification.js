import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'

export default useNotifications = (notificationListener) => {
    useEffect(() => {
        regiterForPushNotifications();
        if (notificationListener)
            Notifications.addPushTokenListener(notificationListener);
    }, [])

    const regiterForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            console.log(permission);
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    const showLocalNotification = (title, body) => {
        Notifications.scheduleNotificationAsync({
            title: title,
            body: body
        })
    }
}