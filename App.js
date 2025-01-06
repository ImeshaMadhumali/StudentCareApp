import React from 'react';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';  
import Layout from './components/layout';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Login'  
            screenOptions={{
              headerStyle: { backgroundColor: '#800080' },  
              headerTitle: 'UOV Student Care',  
              headerTitleStyle: {
                color: '#ffffff',  
                fontSize: 20,
              },
            }}
          >
            <Stack.Screen
              name='Login'
              component={Login}
              options={{ title: "STUDENT LOGIN" }}
            />
            <Stack.Screen
              name='Layout'
              component={Layout}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider >
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
