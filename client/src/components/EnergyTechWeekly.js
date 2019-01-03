import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import EnergyTechHeader from './headers/EnergyTechHeader';
import Footer from './footers/Footer';


class EnergyTechWeekly extends Component {
    render() {
        return (
            <View style={styles.container}>
                <EnergyTechHeader />
                <Footer />
            </View>
        )
    }
}


export default EnergyTechWeekly

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