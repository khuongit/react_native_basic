import React, {Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import AndoidScreen from './AndroidScreen';
import IosScreen from './IosScreen';
import InfoScreen from './InfoScreen';
import ContactScreen from './ContactScreen';
const backgroundColor="#0067a7";
const routeConfigs = {

    AndroidPage: {
        screen: AndoidScreen,
        navigationOptions: {
            tabBarLabel: "Android",
            tabBarIcon: () => (
                <Image
                    source={require('../icons/android.png')}
                    style={{ width: 26, height: 26, tintColor: backgroundColor }} />
            )

        }
    },
    IosPage: {
        screen: IosScreen,
        navigationOptions: {
            tabBarLabel: "IOS",
            tabBarIcon: () => (
                <Image source={require('../icons/ios.png')} style={{ width: 26, height: 26, tintColor: backgroundColor }} />
            )
        }
    },
    InfoPage: {
        screen: InfoScreen,
        navigationOptions: {
            tabBarLabel: "Infomation",
            tabBarIcon: () => (
                <Image source={require('../icons/info.png')} style={{ width: 26, height: 26, tintColor: backgroundColor }} />
            )
        }
    },
    ContactPage: {
        screen: ContactScreen,
        navigationOptions: {
            tabBarLabel: "Contact",
            tabBarIcon: () => (
                <Image source={require('../icons/customer.png')} style={{ width: 26, height: 26, tintColor: backgroundColor }} />
            )
        }
    },

};

const tabNavigatorConfig = {
    initialRouteName: "InfoPage",
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true
    },
};


const MainDisplay = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

const App = createAppContainer(MainDisplay);
export default App