import axios from 'axios'
import React, {Component} from 'react';
import {Modal, StyleSheet, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import StocksHeader from '../headers/StocksHeader'
import Stock from './Stock'
import AddStockButton from './AddStockButton'
import AddStock from './AddStock';

class StocksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            username: 'g',
            tickers: [],
            isVisible: false
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

        const alterVisibility = () => {
            this.setState({
                ...this.state,
                isVisible: true
            })
        }

        
        return (
            <View style={styles.container}>
                <StocksHeader />
                <AddStock isVisible={this.state.isVisible} />

                <ScrollView style={styles.stocksContainer}>
                    <TouchableOpacity style={styles.addStock} onPress={() => alterVisibility()} >
                        <AddStockButton isVisible={this.state.isVisible} />
                    </TouchableOpacity>
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
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 1)'
    },
    stocksContainer : {
        paddingTop: 55,
        paddingBottom: 55
    },
    text : {
        color: 'white'
    },
    addStock: {
        flex: 1
    }
})