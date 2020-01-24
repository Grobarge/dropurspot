import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default class AddEventScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#7189FF', '#A0DDFF']} style={styles.header}>
                </LinearGradient>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Create Event</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Opcion 2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
        marginTop: 0,

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
    // name: {
    //     fontSize: 28,
    //     color: "#696969",
    //     fontWeight: "600"
    // },
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
        backgroundColor: "#00BFFF",
    },
});