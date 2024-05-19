import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeSVG from '../assets/img/home.svg';
import MenuSVG from '../assets/img/menu.svg'
import NotificationSVG from '../assets/img/Notification.svg'
import ProfileSVG from '../assets/img/user.svg'

import HomeScreen from '../screen/HomeScreen';
import DeviceScreen from '../screen/DeviceScreen';
import NotificationScreen from '../screen/NotificationScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: 85,
                    backgroundColor: '#ffffff',
                    elevation: 0,
                    ...styles.ShadowRoot
                }
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center'}}>
                        {focused && <View style={styles.activeTabUnderline} />}
                        <HomeSVG height={24} width={24} color={focused ? '#0866FF' : '#373737'} />
                    </View>
                ),
            }} />
            <Tab.Screen name='Device' component={DeviceScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center'}}>
                        {focused && <View style={styles.activeTabUnderline} />}
                        <MenuSVG height={24} width={24} color={focused ? '#0866FF' : '#373737'} />
                    </View>
                ),
            }} />
            <Tab.Screen name='Notification' component={NotificationScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center'}}>
                        {focused && <View style={styles.activeTabUnderline} />}
                        <NotificationSVG height={24} width={24} color={focused ? '#0866FF' : '#373737'} />
                    </View>
                ),
            }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center'}}>
                        {focused && <View style={styles.activeTabUnderline} />}
                        <ProfileSVG height={24} width={24} color={focused ? '#0866FF' : '#373737'} />
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    ShadowRoot: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    activeTabUnderline: {
        position: 'absolute',
        top: -15,
        height: 2,
        width: 80,
        backgroundColor: '#0866FF',
        marginBottom: 10,
    },
})
export default Tabs;