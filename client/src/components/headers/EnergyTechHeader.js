import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


export default class EnergyTechheader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>Is this email not displaying correctly?</Text>
                <Text style={styles.browser}>View it in your browser.</Text>
                <Image style={styles.logo} resizeMode={'contain'} source={require('../../styles/images/tphco.png')} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container : {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 100, 1)'
    },
    question : {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 8,
        fontWeight: 'bold'
    },
    browser : {
        color : 'rgba(255, 100, 100, 1)',
        fontSize : 8,
    },
    logo: {
        width: 300,
        height: 200,
        tintColor: 'rgba(255, 255, 255, 1)',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
})