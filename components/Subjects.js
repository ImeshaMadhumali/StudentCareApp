import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Divider, Card } from 'react-native-paper';
import { subjects, marks, courses } from '../assets/data/StudentsDb.js';
import logo from '../assets/logo.png';


export default function Subjects({ route }) {
    const { student } = route.params;
    const id = student?.course_id;
    const course = courses.find(course => course.id === id);
    const courseSubjects = subjects.filter(subject => subject.course_id === id);
    const studentMarks = marks.filter(mark => mark.student_id === student.id);

    const averageMarks = studentMarks.reduce((acc, mark) => acc + mark.marks, 0) / studentMarks.length;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
            <Card style={styles.card}>
                <View style={styles.userProfile}></View>
                <Text style={styles.title}>{course.name}</Text>
                <Text style={styles.studata}>Number of Subjects: {courseSubjects.length}</Text>
                <Text style={styles.studata}>Average Marks: {averageMarks.toFixed(2)}</Text>

                <Divider style={styles.divider} />
                <Text style={styles.sectionTitle}>Subjects and Marks</Text>
                {courseSubjects.map(subject => (
                    <View key={subject.id} style={styles.subjectContainer}>
                        <Text style={styles.subjectText}>{subject.name}</Text>
                        <Text style={styles.marksText}>
                            Marks: {studentMarks.find(mark => mark.subject_id === subject.id)?.marks || 'N/A'}
                        </Text>
                    </View>
                ))}
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
    logoContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    logo: {
        width: 300,
        height: 80,  // Adjust this according to your logo size
        marginBottom: 100,  // Reduced spacing for better layout
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
    studata: {
        fontSize: 18,
        marginBottom: 8,
        alignSelf: 'flex-start',
        color: '#555', // Subtle color for course data
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6,
        textAlign: 'center',
        color: '#333',
    },
    subjectText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    marksText: {
        fontSize: 16,
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