import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EnergyTechAltStory from './EnergyTechAltStory'

export default class EnergyTechAltStoryContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.storyContainer}>
                <EnergyTechAltStory />
                </View>
                <View style={styles.storyContainer}>
                <EnergyTechAltStory />
                </View>
                <View style={styles.storyContainer}>
                <EnergyTechAltStory />
                </View>
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
        justifyContent: 'space-evenly'
    },
    storyContainer: {
        alignItems: 'center',
        width: '45%'
    }
})