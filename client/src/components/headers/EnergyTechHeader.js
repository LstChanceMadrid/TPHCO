import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


class EnergyTechheader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>Is this email not displaying correctly?</Text>
                <Text style={styles.browser}>View it in your browser.</Text>
                <View style={styles.logoTitle}>
                    <Text>Image</Text>
                    <Text>ENERGY TECH WEEKLY</Text>
                </View>
            </View>
        )
    }
}

export default EnergyTechHeader

const styles = StyleSheet.create({
    container : {
        padding: 10
    },
    question : {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 8,
        fontWeight: 'bold'
    },
    browser : {
        color : 'rgba(255, 100, 100, 1)',
        fontSize : 8,
    }
})