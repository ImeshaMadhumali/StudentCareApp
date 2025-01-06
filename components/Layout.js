import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Profile from './Profile';
import Courses from './Courses';  
import Subjects from './Subjects';

export default function Layout({ route }) {
    const { student } = route.params;
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
      { key: 'courses', title: 'Courses', focusedIcon: 'school', unfocusedIcon: 'school-outline' },
    { key: 'subjects', title: 'Subjects', focusedIcon: 'book-open', unfocusedIcon: 'book-open-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        profile: () => <Profile route={{params: {student} }}/>,
        courses: () => <Courses route={{params: {student} }}/>,
        subjects: () => <Subjects route={{params: {student} }}/>,
      });

      return (
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        keyExtractor={(item) => item.key}
    />
      );
    };