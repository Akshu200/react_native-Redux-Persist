import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addEmpDetails } from '../redux/slice';
const Home = () => {
    const dispatch = useDispatch()
    const userEmail = useSelector((state) => state?.todos?.userEmail)
    const [empName, setEmpName] = useState('');
    const [empAddress, setEmpAddress] = useState('');
    const [empAge, setEmpAge] = useState('');
    const [empCity, setEmpCity] = useState('');


    const handleAddEmp = () => {
        dispatch(addEmpDetails({ empName, empAddress, empAge, empCity }))

    }

    return (
        <ScrollView style={styles.constainer}>
            <Text style={styles.userText}>userProfile : {userEmail}</Text>
            <View style={{ marginTop: 50 }}>
                <Text style={{ fontSize: 20 }}>Add Employee Details</Text>
                <TextInput placeholderTextColor={'black'} placeholder="Employee Name"
                    onChangeText={(text) => {
                        setEmpName(text)
                    }}
                    style={styles.textInput} />
                <TextInput placeholderTextColor={'black'} placeholder="Employee Age"
                    onChangeText={(text) => {
                        setEmpAge(text)
                    }}
                    style={styles.textInput} />
                <TextInput placeholderTextColor={'black'} placeholder="Employee Address"
                    onChangeText={(text) => {
                        setEmpAddress(text)
                    }}
                    style={styles.textInput} />
                <TextInput placeholderTextColor={'black'} placeholder="Employee city"
                    onChangeText={(text) => {
                        setEmpCity(text)
                    }}
                    style={styles.textInput} />

                <TouchableOpacity onPress={handleAddEmp} style={styles.button}>
                    <Text>Add Emp Details</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default Home
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