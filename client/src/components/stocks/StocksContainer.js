import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import StocksHeader from '../headers/StocksHeader'
import Stock from './Stock'

class StocksContainer extends Component {
    render() {

        return (
            <View style={styles.container}>
                <StocksHeader />

                <ScrollView style={styles.stocksContainer}>
                    <Stock  symbol={'aapl'} />
                    <Stock symbol={'goog'} />
                    <Stock symbol={'tsla'} />
                    
                </ScrollView>
            </View>
        )
    }
}

export default StocksContainer

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'flex-start'
    },
    stocksContainer : {
        paddingTop: 55
    },
    text : {
        color: 'white'
    }
})