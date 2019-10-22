import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Sup I am the profile page</Text>
        </View>
    );
}

ProfileScreen.navigationOptions = {
    title: 'Profile',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
