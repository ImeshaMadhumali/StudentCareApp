import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './Login';

const Header = () => {
    return(
      <View style={styles.header}>
        <View style={styles.text}>
            <Text style={styles.headerText}>UOV Student Care</Text>
        </View>
        <View styel={styles.logoContainer}>
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            />
        </View>
      </View>  
    );
};