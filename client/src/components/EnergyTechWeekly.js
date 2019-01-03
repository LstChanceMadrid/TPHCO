import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
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