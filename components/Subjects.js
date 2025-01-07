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
                <Text style={styles.studata}>{courseSubjects.length} Subjects| Average : {averageMarks.toFixed(2)}</Text>

                <Divider style={styles.divider} />

                <Text style={styles.sectionTitle}>Marks Information</Text>
                <View style={styles.row}>
                    <Text style={styles.subtitle}>Subject</Text>
                    <Text style={styles.subtitle}>Marks</Text>
                </View>

                <Divider style={styles.divider} />

                {courseSubjects.map(subject => {
                    const subjectMarks = studentMarks.find(mark => mark.subject_id === subject.id)?.marks || 'N/A';
                    return (
                        <View key={subject.id} style={styles.subjectContainer}>
                            <Text style={styles.subjectText}>{subject.name}</Text>
                            <Text style={styles.marksText}>{subjectMarks}</Text>
                        </View>
                    );
                })}
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
        height: 80,  
        marginBottom: 100,  
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
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        paddingHorizontal: 16, 
        color: 'gray',
    },
    studata: {
        fontSize: 14,
        alignItems: 'center',
        marginBottom: 14,
        alignSelf: 'flex-start',
        color: '#555', 
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'justify',
        color: '#333',
    },
    subjectContainer: {
        flexDirection: 'row',          
        justifyContent: 'space-between', 
        alignItems: 'center',         
        marginBottom: 8,              
         paddingVertical: 8,            
         paddingHorizontal: 16,         
    },
    subjectText: {
        fontSize: 16,  
        color: '#333',
        flex: 1,        
    },
    marksText: {
        fontSize: 16,   
        color: '#333',
        textAlign: 'right', 
        minWidth: 50,   
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