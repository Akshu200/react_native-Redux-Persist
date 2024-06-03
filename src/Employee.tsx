import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addEmpDetails } from '../redux/slice';
const Employee = () => {

    const uempDetails = useSelector((state) => state?.todos.employeeDetails)
    console.log('the emp tab inside', uempDetails, uempDetails.length)
    return (
        <ScrollView style={styles.constainer}>
            <Text style={{ fontSize: 25 }}>Employee Details:</Text>
            {
                uempDetails.length === 0 && <Text style={{ fontSize: 30, color: 'red' }}>the Emp table is empty!, to see add data first from home Tab</Text>
            }
            {uempDetails.length > 0 && <FlatList data={uempDetails} renderItem={({ item, index }) => {
                return (
                    <View style={{ borderBottomWidth: 1, borderBlockColor: 'white', borderRadius: 10, paddingVertical: 5 }}>
                        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                            Name: {item.empName}
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                    Age: {item.empAge}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                                    Address: {item.empAddress}
                                </Text>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                                    city: {item.empCity}
                                </Text></View>
                        </View>
                    </View>
                )
            }} />}
        </ScrollView>
    )
}
export default Employee
const styles = StyleSheet.create({
    constainer: { flex: 1, backgroundColor: "grey", paddingHorizontal: 12 },
    userText: { color: 'white', fontSize: 20 },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 10,
        marginBottom: 10,
        color: "white",
        borderRadius: 12,
        marginVertical: 10
    },
    button: {
        height: 40,
        width: '100%',
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
})
