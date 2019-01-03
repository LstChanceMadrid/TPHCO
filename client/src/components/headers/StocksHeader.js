import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


class StocksHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>STOCKS</Text>

                <Text style={styles.date}>MONTH DAY</Text>
                
            </View>
        )
    }
}

export default StocksHeader

const styles = StyleSheet.create({
    container : {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor : 'rgba(15, 15, 15, 1)',
        padding: 10,
        paddingTop: 40,
        zIndex: 2
    },
    title : {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 20,
        fontWeight: 'bold'
    },
    date : {
        color : 'rgba(150, 150, 150, 1)',
        fontSize : 20,
        fontWeight: 'bold'
    }
})