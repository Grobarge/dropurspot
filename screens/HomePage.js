import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    TextInput,
    StatusBar,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Category from './explore/Category';
import Aroundworld from './explore/aroundworld';

const { height, width } = Dimensions.get('window');


export default class HomeScreen extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'andriod') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 0, borderBottomColor: '#dddddd', position: 'sticky' }}>
                        <View style={{ flexDirection: 'row', padding: 15, backgroundColor: 'white', marginHorizontal: 20, shadowOffset: { width: 1, height: 1 }, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, marginTop: Platform.OS == 'android' ? 30 : null }}>
                            <Icon name='ios-search' size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                placeholder="Search for a Spot !"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }} />
                        </View>
                    </View>
                    <ScrollView scrollEventThrottle={16} >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }} >
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }} >Choose a Category!</Text>
                            <View style={{ height: 130, marginTop: 20 }} >
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('../assets/images/partyspot.jpg')} name="Party" />
                                    <Category imageUri={require('../assets/images/campingspot.jpg')} name="Camping" />
                                    <Category imageUri={require('../assets/images/gamingspot.jpg')} name="Gaming" />
                                    <Category imageUri={require('../assets/images/studyspot.jpg')} name="Study" />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20, }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', }}>Intoducing SpotDrop Featured</Text>
                                <Text style={{ fontWeight: '400', marginTop: 10 }}>A new selection of spots that are verified</Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image source={require('../assets/images/concert.jpg')} style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderColor: '#dddddd' }} />
                                </View>
                            </View>
                            <View style={{ marginTop: 40, }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>SpotDrop Around the World</Text>
                                <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    <Aroundworld width={width} name="The Coze Place" type="Party Spot" details="Dm for details" location="Springville, UT" />
                                    <Aroundworld width={width} name="Gamers Central" type="Gaming Spot" details="Huge LAN party" location="Lehi, UT" />
                                    <Aroundworld width={width} name="Spanish Fork House Party" type="Party Spot" details="hit me up, BYOB" location="Springville, UT" />
                                    <Aroundworld width={width} name="Diamond Fork Canyon" type="Camping Spot" details="Gonne hit the trailhead at 5" location="Spanish Fork, UT" />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}




HomeScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
