import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

export default class AddEventScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Profile Screen </Text>
                <Image style={styles.image} source={{ uri: this.props.navigation.getParam("photoUrl") }} />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Welcome, {this.props.navigation.getParam("username")}
                </Text>
                <Button
                    title="Sign out"
                    onPress={() => this.props.navigation.navigate("Login")}
                />
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
    image: {
        marginTop: 10,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderRadius: 5
    }
});