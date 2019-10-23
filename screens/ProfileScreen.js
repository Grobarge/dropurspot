import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Auth } from 'aws-amplify';

export default class ProfileScreen extends React.Component {
    handleSignOut = () => {
        Auth.signOut()
            .then(() => this.props.navigation.navigate('Home'))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Sup I am the profile page</Text>
                </View>
                <View>
                    <Button
                        style={{ ...styles.button, }}
                        title="Sign Out"
                        onPress={this.handleSignOut}
                    />
                </View>
            </View>
        );
    }
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
