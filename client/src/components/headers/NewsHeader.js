import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


class NewsHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>TOP STORIES</Text>

                <Text style={styles.credit}>From Apple News</Text>
            </View>
        )
    }
}

export default NewsHeader

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'rgba(15, 15, 15, 1)',
        padding: 10
    },
    title : {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 20,
        fontWeight: 'bold'
    },
    date : {
        color : 'rgba(150, 150, 150, 1)',
        fontSize : 10,
    }
})