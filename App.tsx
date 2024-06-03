import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigator from './src/Navigator'

import Login from './src/Login';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/BottomTabs';
import { Provider, useSelector } from 'react-redux'
import Home from './src/Home';
import { store } from './redux/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react'
import BootSplash from "react-native-bootsplash";
let persistor = persistStore(store)
const App = () => {
    useEffect(() => {
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
            console.log("BootSplash has been hidden successfully");
        });
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>

                <Navigator />
            </PersistGate>
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({})