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
    const [secureText, setSecureText] = useState(true); 

    const navigation = useNavigation();

    const handleLogin = () => {
        const student = students.find((s) => s.username === username);
        if (student && student.password === password) {
          navigation.navigate('Layout', { student }); 
        } else {
          alert('Invalid username or password'); 
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
                secureTextEntry={secureText} 
        right={
          <TextInput.Icon
            name={secureText ? "eye-off" : "eye"}
            onPress={() => setSecureText(!secureText)} 
            />
        }
                style={styles.input}
            />
            <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.button}
                buttonColor="#800080" 
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
        height: 80,  
        marginBottom: 100,
       
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 80, 
        textAlign: 'center', 
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 8,
        marginBottom: 16, 
    },
    input: {
        backgroundColor: 'white', 
        color: 'black', 
        marginBottom: 16,
        width: '80%',

    },
    button: {
        marginTop: 20,
        width: '80%',
    },
});