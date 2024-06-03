import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert }
    from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { useDispatch } from 'react-redux'
import { addEmail } from '../redux/slice';
import { loginApi } from '../redux/asyncAction';
const Login = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [inValid, serInvalid] = useState(false);

    const validatePassword = (password) => {
        // Check if password meets the criteria
        // Criteria: At least 8 characters, containing at least one uppercase letter, one lowercase letter, one digit, and one special character
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return pattern.test(password);
    };


    const validateEmail = (email) => {
        // Regular expression pattern for validating email
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleValidation = () => {
        if (password && email) {
            if (validateEmail(email)) {
                console.log('Valid Email', 'Email address is valid!');
                serInvalid(false)
            } else {
                serInvalid(true)
                console.log('inValid Email', 'Email address is invalid!');
            }
            if (validatePassword(password)) {
                serInvalid(false)
                console.log('Valid password', 'passwod matched');
            } else {
                serInvalid(true)
                console.log('inValid password', 'passwod not matched');
            }
            if (validateEmail(email) && validatePassword(password)) {
                dispatch(loginApi({ email, password }))
                navigation.navigate('BottomTabs')
            }
        }
        else {
            serInvalid(true)
        }
    };
    return (
        <View style={styles.container}>
            {inValid && <Text style={{ color: "red" }}>you entered wrong email and password !</Text>}
            <TextInput placeholderTextColor={'black'} placeholder="Enter your Email"
                onChangeText={(text) => {
                    setEmail(text);

                }}
                style={styles.textInput} />
            <TextInput placeholderTextColor={'black'} placeholder="Enter your password"
                onChangeText={(text) => {
                    setPassword(text);
                    validatePassword(text)
                }}
                style={styles.textInput} />
            <Text style={styles.suggestionsText}>
                {suggestions.map((suggestion, index) => (
                    <Text key={index}>
                        {suggestion}{'\n'}
                    </Text>))}
            </Text>
            <TouchableOpacity onPress={handleValidation} style={styles.button}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        height: 40,
        width: "100%",
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    Heading: {
        marginTop: 40,
        padding: 40,
    },
    HeadingText: {
        fontSize: 25,
        alignItems: 'center',
        fontWeight: 'bold',
        color: "black"
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 10,
        marginBottom: 10,
        color: "black",
        borderRadius: 12,
    },
    strengthText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#007700',
    },
    suggestionsText: {
        color: 'red',
        width: "100%"
    },
    strengthMeter: {
        width: '100%',
        height: 20,
        backgroundColor: '#ccc',
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
});
export default Login;
