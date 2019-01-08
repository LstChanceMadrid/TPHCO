import axios from 'axios'
import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import StocksHeader from '../headers/StocksHeader'
import Stock from './Stock'

class StocksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            username: 'g',
            tickers: []
        }
    }

    componentWillMount = () => {
        axios.post('http://localhost:5000/tickers', {
            username: this.state.username
        }).then(response => {
            this.setState({...this.state, tickers: response.data.tickers})
        })
    }






    render() {

        let tickerArray = []

            this.state.tickers.map((ticker, i) => {
                let stockData = <Stock key={i} symbol={ticker} />

                tickerArray.push(stockData)
            })




        return (
            <View style={styles.container}>
                <StocksHeader />

                <ScrollView style={styles.stocksContainer}>
                    {tickerArray}
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
        paddingTop: 55,
        paddingBottom: 55
    },
    text : {
        color: 'white'
    }
})