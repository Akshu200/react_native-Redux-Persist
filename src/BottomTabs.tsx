import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Employee from './Employee';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <View style={{ flex: 1, bottom: 0 }}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="employee" component={Employee} />
            </Tab.Navigator>
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})