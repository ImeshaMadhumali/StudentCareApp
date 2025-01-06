import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import logo from '../assets/logo.png';
import { courses } from '../assets/data/StudentsDb';
import { styles as loginStyles } from './Login'; // Renamed to avoid style conflicts

export default function Course({ route }) {
  // Safe handling for missing route.params
  const { student } = route.params || {};
  const id = student?.course_id;

  const course = courses.find(course => course.id === id);

  if (!course) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Course not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card>
          <View style={styles.profileContainer}>
            <View style={styles.userProfile}>
              <Text style={styles.title}>{course.name}</Text>
              <Text style={styles.studata}>Code: {course.course_code}</Text>
              <Text style={styles.studata}>Department: {course.department}</Text>
              <Text style={styles.studata}>Duration: {course.duration}</Text>
              <Text style={styles.studata}>Description: {course.description}</Text>
              <Divider style={styles.divider} />
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Added a light background color
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 80, // Adjusted for better sizing
    marginTop: 20,
    marginBottom: 20, // Reduced spacing for better layout
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  profileContainer: {
    width: '100%',
    alignItems: 'center',
  },
  userProfile: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // For Android shadow effect
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  studata: {
    fontSize: 18,
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: '#555', // Subtle color for course data
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
});
