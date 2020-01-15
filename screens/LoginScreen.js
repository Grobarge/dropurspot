import React, { Component } from "react";
import { View, StyleSheet, Button, } from "react-native";

import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
    "1045821831790-dpm26aipk5nvutsfisi5qtsvtt3fenql.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
    "your-android-client-id";

export default class LoginScreen extends Component {
    signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: IOS_CLIENT_ID,
                androidClientId: ANDROID_CLIENT_ID,
                scopes: ["profile", "email"]
            });

            if (result.type === "success") {
                console.log("fuck yeah")
                this.props.navigation.navigate("Profile", {
                    username: result.user.givenName + result.user.familyName,
                    photoUrl: result.user.photoUrl
                }); //after Google login redirect to Profile
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log('Fuck You', e);
            return { error: true };
        }
    };


    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button} title="Login with Google" onPress={this.signInWithGoogle} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: 'red',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    }
});