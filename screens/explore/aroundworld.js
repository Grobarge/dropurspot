import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';




export default class Aroundworld extends React.Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd', marginBottom: 15 }}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/images/oldtown.jpg')} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: 'red' }}>{this.props.type}</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 10 }}>{this.props.details}</Text>
                    <Text style={{ fontSize: 10 }}>{this.props.location}</Text>
                </View>
            </View>


        );
    }
}

Aroundworld.navigationOptions = {
    title: 'Map',
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white'
    }
})