
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default class ProfileScreen extends Component {
    render() {
        return (
            <LinearGradient colors={['#7189FF', '#A0DDFF']} style={styles.container}>

                <Image style={styles.avatar} source={{ uri: this.props.navigation.getParam("photoUrl") }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Welcome, {this.props.navigation.getParam("username")}
                        </Text>
                        <Text >John Doe</Text>
                        <Text style={styles.info}>UX Designer / Mobile developer</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Button
                                title="Sign out"
                                onPress={() => this.props.navigation.navigate("Login")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Opcion 2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },

    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#0000",
    },
});