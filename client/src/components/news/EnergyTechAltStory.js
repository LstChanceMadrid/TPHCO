import React, { Component } from 'react'
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default class EnergyTechAltStory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.titleContainer}>
            <Text style={styles.titleText}>Title of Story</Text>
        </TouchableOpacity>
        <Image style={styles.image} resizeMode={'contain'} source={require('../../styles/images/tph-block.png')} />
        <Text style={styles.story} numberOfLines={10} ellipsizeMode={'tail'}>body of the story</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        width: '100%'
    },
    titleContainer: {
        padding: 5
    },
    titleText: {
        fontSize: 18,
        color: 'rgba(255, 150, 100, 1)'
    },
    story: {
        color: 'white'
    },
    image: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})
