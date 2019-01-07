import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EnergyTechAltStory from './EnergyTechAltStory'

export default class EnergyTechAltStoryContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <EnergyTechAltStory />
                <EnergyTechAltStory />
                <EnergyTechAltStory />
                <EnergyTechAltStory />
                <EnergyTechAltStory />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})