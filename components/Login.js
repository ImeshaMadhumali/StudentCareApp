import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Login(){
return (
    <View style={styles.container}>
    <Text variant="titleLarge">STUDENT LOGIN</Text>
    <StatusBar style="auto" />
    <Divider/>
  
    <TextInput
       mode="flat"
       label="Username"
       value={username}
       onChangeText={setUsername}
       style={styles.input}
      />
      <TextInput
       mode="flat"
       label="Password"
       value={password}
       onChangeText={setPassword}
       style={styles.input}
      />
      <Button mode="contained" onPress={pressed}>
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 8,
        marginBottom: 16, // Creates space between input fields and button
      },
      inputWhite: {
        backgroundColor: 'white', // White background
        color: 'black', // Black font color
      },
      button: {
        marginTop: 20, // Adds space above the button
      },
  });