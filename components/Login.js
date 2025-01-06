import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, Button, Divider } from 'react-native-paper';
import logo from '../assets/logo.png';
import { students } from '../assets/data/StudentsDb.js';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true); // State for password visibility

    const navigation = useNavigation();

    const handleLogin = () => {
        const student = students.find(s => s.username === username);
        if (student && student.password === password) {
            navigation.navigate('Profile'); // Navigate to Profile screen after successful login
        } else {
            alert('Invalid username or password'); // Alert for invalid credentials
        }
    };

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text variant="titleLarge" style={styles.title}>STUDENT LOGIN</Text>
            <StatusBar style="auto" />
            <Divider />

            <TextInput
                mode="outlined"
                label="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                mode="outlined"
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureText} // Toggle password visibility
        right={
          <TextInput.Icon
            name={secureText ? "eye-off" : "eye"}
            onPress={() => setSecureText(!secureText)} // Toggle secureText
            />
        }
                style={styles.input}
            />
            <Button
                mode="contained"
                onPress={pressed}
                style={styles.button}
                buttonColor="#800080" // Purple color
                textColor="#fff"
            >

                Login
            </Button>

        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    logo: {
        width: 300,
        height: 80,  // Adjust this according to your logo size
        marginBottom: 100, // Reduce this value to move the title closer to the logo
       
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 80, // Ensure the title is closer to the input fields
        textAlign: 'center', // Center-align the title
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 8,
        marginBottom: 16, // Creates space between input fields and button
    },
    input: {
        backgroundColor: 'white', // White background
        color: 'black', // Black font color
        marginBottom: 16,
        width: '80%',

    },
    button: {
        marginTop: 20,
        width: '80%',
    },
});