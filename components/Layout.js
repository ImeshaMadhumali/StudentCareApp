import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Profile from './Profile';

export default function Layout({ route }) {
    const { user } = route.params;
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
      { key: 'courses', title: 'Courses', focusedIcon: 'school', unfocusedIcon: 'school-outline' },
    { key: 'subjects', title: 'Subjects', focusedIcon: 'book-open', unfocusedIcon: 'book-open-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        profile: () => <Profile user={user} />,
        courses: () => <Courses student={student} />,
        subjects: () => <Subjects student={student} />,
      });

      return (
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
    />
      );
    };