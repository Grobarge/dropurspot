import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddEventScreen from '../screens/AddEventScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: { headerMode: 'none' },

});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    activeTintColor: 'red',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5
    }

  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';




const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  config
);


MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarOptions: {
    activeTintColor: 'red',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />

  ),
};


MapStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarOptions: {
    activeTintColor: 'red',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-options'} />
  ),
};

ProfileStack.path = '';



const AddEventStack = createStackNavigator(
  {
    AddEvent: AddEventScreen,
  },
  config
);


AddEventStack.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarOptions: {
    activeTintColor: 'red',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'} />

  ),
};


AddEventStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AddEventStack,
  MapStack,
  ProfileStack,

});

tabNavigator.path = '';




export default tabNavigator;
