import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation } from 'react-native-paper';
import Profile from './Profile';
import Courses from './Courses';
import Subjects from './Subjects';

const Stack = createNativeStackNavigator();

export default function Layout({ route }) {
  const { student } = route.params;

  const BottomTabs = () => {
    const [index, setIndex] = React.useState(0);
    const routes= [
      { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
      { key: 'courses', title: 'Courses', focusedIcon: 'school', unfocusedIcon: 'school-outline' },
      { key: 'subjects', title: 'Subjects', focusedIcon: 'book-open', unfocusedIcon: 'book-open-outline' },
    ];

    const renderScene = BottomNavigation.SceneMap({
      profile: () => <Profile route={{ params: { student } }} />,
      courses: () => <Courses route={{ params: { student } }} />,
      subjects: () => <Subjects route={{ params: { student } }} />,
    });

    const renderBar = (props) => {
      return (
        <BottomNavigation.Bar
          {...props}
          getLabelText={({ route }) => route.title} // Custom label rendering
          getAccessibilityLabel={({ route }) => route.title} // Accessibility improvement
          getTestID={({ route }) => `bottom-tab-${route.key}`}
        />
      );
    };

    return (
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderBar={renderBar} // Use the custom renderBar
    />

    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#800080' }, // Purple background
        headerTitleStyle: { color: '#ffffff', fontSize: 20 }, // White header text
        headerTitle: 'UOV Student Care',
      }}
    >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: true }} // Show the header for all tabs
      />
    </Stack.Navigator>
  );
}