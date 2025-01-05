import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';  // Import Login screen
import { Image } from 'react-native';
import logo from './assets/logo.png';

const Stack = createNativeStackNavigator();

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='login'  // Set Login screen as the initial screen
            screenOptions={{
              headerStyle: { backgroundColor: '#800080' },  // Purple background
              headerTitle: 'UOV Student Care',  // Header title
              headerTitleStyle: {
                color: '#ffffff',  // White title text
                fontSize: 20,
              },
            }}
          >
            <Stack.Screen name='login' component={Login} options={{ title: "Login" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
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
