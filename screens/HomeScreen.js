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
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import { MonoText } from '../components/StyledText';


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
          <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
            <View style={{ flexDirection: 'row', padding: 15, backgroundColor: 'white', marginHorizontal: 20, shadowOffset: { width: 0, height: 0 }, shadowColor: 'black', shadowOpacity: 0.2 }}>
              <Icon name='ios-search' size={20} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Try Searching"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }} />
            </View>
          </View>
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
