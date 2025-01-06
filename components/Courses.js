import React, { useLayoutEffect } from 'react';
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
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
           <Card style={styles.card}>
                <View style={styles.userProfile}>

                    <Text style={styles.title}>{course.name}</Text>
                    <Text style={styles.studata}>Code: {course.course_code} | Department: {course.department}</Text>
                    <Divider style={styles.divider} />


                    <Text style={styles.sectionTitle}>Course Information</Text>
                    <Text style={styles.studata}>Code: {course.course_code}</Text>
                    <Text style={styles.studata}>Department: {course.department}</Text>
                    <Text style={styles.studata}>Duration: {course.duration}</Text>
                    <Text style={styles.studata}>Description: {course.description}</Text>

                </View>

            </Card>
            <View style={styles.footer}>
                <Text style={{ color: "#ffffff" }}>UoV © 2025</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6,
        textAlign: 'center',
        color: '#333',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    logo: {
        width: 300,
        height: 80,  // Adjust this according to your logo size
        marginBottom: 100,  // Reduced spacing for better layout
    },
    scrollContainer: {
        padding: 16,
        alignItems: 'center',
    },
    card: {
        width: '100%',
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    userProfile: {
        alignItems: 'center',
        marginBottom: 12,
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
    footer: {
        backgroundColor: "#520f4e",
        width: "100%",
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
});
