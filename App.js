import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';  // Import Login screen


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Login'  // Set Login screen as the initial screen
            screenOptions={{
              headerStyle: { backgroundColor: '#800080' },  // Purple background
              headerTitle: 'UOV Student Care',  // Header title
              headerTitleStyle: {
                color: '#ffffff',  // White title text
                fontSize: 20,
                //alignItems: 'center'
              },
            }}
          >
            <Stack.Screen name='Login' component={Login} options={{ title: "STUDENT LOGIN" }} />
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
