import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SoSoAir = ({city, aqius}) => (
    <View style={styles.container}>
        <Text style={styles.cityText}>{city}</Text>
        <Image source={require('../../assets/sosoDog.png')} />
        <Text style={styles.airText}>SoSo</Text>
        <Text style={styles.airText}>{aqius}</Text>
        <Text style={styles.description}>A walk for dog</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#64ABF1',
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

export default SoSoAir;