import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios'


class Stock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            stock: {
                meta : '',
                data : ''
            }
        }
    }

    
    componentWillMount = () => {
        axios.get(`https://api.iextrading.com/1.0/stock/${this.props.symbol}/company`).then(company => {
            const stockCompany = company.data

            axios.get(`https://api.iextrading.com/1.0/stock/${this.props.symbol}/chart/1m`).then(chartDay => {

                const stockChartDay = chartDay.data
                const lengthDay = stockChartDay.length
                

            axios.get(`https://api.iextrading.com/1.0/stock/${this.props.symbol}/chart/1d`).then(chartMinute => {
                const stockChartIntra = chartMinute.data
                let lengthMinute = stockChartIntra.length

            


                this.setState({
                    ...this.state,
                    stock: {
                        symbol: stockCompany.symbol,
                        name : stockCompany.companyName,
                        date : stockChartIntra[lengthMinute - 1].date,
                        changeOverTime : stockChartDay[lengthDay-1].close - stockChartIntra[lengthMinute - 1].close,
                        current : stockChartIntra[lengthMinute - 1].close
                    }
                })
            })
        })
    })
    }





    render() {
        
        let date = this.state.stock.date
        let changeOverTime = this.state.stock.changeOverTime
        let name = this.state.stock.name
        let symbol = this.state.stock.symbol
        let current = this.state.stock.current

        if (changeOverTime > 0) {
           let positiveChangeOverTime = `+${parseFloat(changeOverTime).toFixed(3)}`
           
           return (
            <View style={styles.container}>
                <View style={styles.stockInfo}>
                    <Text style={styles.symbol}>{symbol}</Text>

                    <Text style={styles.name}>{name}</Text>
                </View>

                <View>
                    <Text style={{color: 'white'}}>Graph</Text>
                </View>

                <View style={styles.stockPrice}>
                    <Text style={styles.current}>{current}</Text>

                    <View style={styles.positiveFlux}>
                        <Text style={{flex: 1, color: 'white'}}>{positiveChangeOverTime}</Text>
                    </View>
                </View>
            </View>
            )
        } else {
            let negativeChangeOverTime = parseFloat(changeOverTime).toFixed(3)

            return (
                <View style={styles.container}>
                    <View style={styles.stockInfo}>
                        <Text style={styles.symbol}>{symbol}</Text>

                        <Text style={styles.name}>{name}</Text>
                    </View>

                    <View>
                        <Text style={{color: 'white'}}>Graph</Text>
                    </View>

                    <View style={styles.stockPrice}>
                        <Text style={styles.current}>{current}</Text>

                        <View style={styles.negativeFlux}>
                            <Text style={{color: 'white'}}>{negativeChangeOverTime}</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }
}

export default Stock

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(25, 25, 25, 1)'
    },
    stockInfo : {
        flex : 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    stockPrice : {
        flex : 1,
        alignItems: 'flex-end'
    },
    symbol : {
        color: 'white',
        paddingTop: 5,
        paddingBottom: 5
    },
    current : {
        color: 'white',
        paddingTop: 5,
        paddingBottom: 5
    },
    name: {
        color : 'rgba(150, 150, 150, 1)',
        paddingTop: 5,
        paddingBottom: 5 
    },
    negativeFlux: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        width: 75,
        height: 12,
        paddingRight: 2, 
    },
    positiveFlux: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        width: 75,
        height: 12,
        paddingRight: 2, 
    }

})