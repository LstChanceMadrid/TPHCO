import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


export default class EnergyTechheader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>Is this email not displaying correctly?</Text>
                <Text style={styles.browser}>View it in your browser.</Text>
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} resizeMode={'contain'} source={require('../../styles/images/energy-tech-header.png')} />
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container : {
        padding: 10,
        top: 0
    },
    question : {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 8,
        fontWeight: 'bold'
    },
    browser : {
        textAlign: 'center',
        color : 'rgba(255, 100, 100, 1)',
        fontSize : 8,
    },
    logoWrapper: {
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    logo: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }
})