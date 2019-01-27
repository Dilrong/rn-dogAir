import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BadAir = ({city, aqius}) => (
    <View style={styles.container}>
        <Text style={styles.cityText}>{city}</Text>
        <Image source={require('../../assets/badDog.png')} />
        <Text style={styles.airText}>Bad</Text>
        <Text style={styles.airText}>{aqius}</Text>
        <Text style={styles.description}>careful go out for dog.</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#F9D45B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cityText: {
        color:'#fff',
        fontSize: 30,
        marginBottom: 100
    },
    airText: {
        margin: 5,
        color:'#fff',
        fontSize: 70
    },
    description: {
        margin: 10,
        color:'#fff',
        fontSize: 20
    }
});

export default BadAir;