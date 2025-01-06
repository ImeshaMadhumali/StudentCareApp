import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-paper';

export default function Profile({ route }) {
    const { student } = route.params; // Access student data

    return (
        <View style={styles.container}>
             <Image
                source={student.picture} // Display the student's picture
                style={styles.avatar}
            />
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.details}>Age: {student.age} | Gender: {student.gender}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <Text style={styles.info}>Email: {student.email}</Text>
            <Text style={styles.info}>Phone: {student.phone}</Text>
            <Text style={styles.info}>Address: {student.address}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.sectionTitle}>Biological Information</Text>
            <Text style={styles.info}>Blood Group: {student.bloodGroup}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#fff',
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
