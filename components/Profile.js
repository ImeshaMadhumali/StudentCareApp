import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Divider, Card } from 'react-native-paper';
import logo from '../assets/logo.png';

export default function Profile({ route }) {
    const { student } = route.params; // Access student data

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
            <Card style={styles.card}>
                <View style={styles.cardContent}>
                    <Image
                        source={student.profile_pic} // Display the student's picture
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>{student.name}</Text>
                    <Text style={styles.details}>Age: {student.age} | Gender: {student.gender}</Text>
                </View>
            </Card>
            <Divider style={styles.divider} />
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <Text style={styles.info}>Email: {student.email}</Text>
            <Text style={styles.info}>Phone: {student.phone}</Text>
            <Text style={styles.info}>Address: {student.address}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.sectionTitle}>Biological Information</Text>
            <Text style={styles.info}>Gender: {student.gender}</Text>
            <Text style={styles.info}>Age: {student.age}</Text>
            <Text style={styles.info}>Blood Group: {student.blood_group}</Text>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer Content Here</Text>
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
        marginBottom: 100, // Reduce this value to move the title closer to the logo
       
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
    cardContent: {
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#800080',
    },
    details: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
    },
    divider: {
        marginVertical: 16,
        width: '100%',
        backgroundColor: '#ccc',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: 8,
        color: '#800080',
    },
    info: {
        fontSize: 16,
        color: '#333',
        alignSelf: 'flex-start',
        marginBottom: 4,
    },
});
