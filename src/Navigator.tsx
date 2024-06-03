import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Login'
import BottomTabs from './BottomTabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
const Stack = createNativeStackNavigator();
const Navigator = () => {
    const islogged = useSelector((state) => state?.todos?.userEmail)
    console.log('the logged', islogged)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {islogged === "" && <Stack.Screen name="login" component={Login} />}
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})