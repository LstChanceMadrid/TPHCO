import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles/styles'


class StocksHeader extends Component {
    render() {
        let monthDay = new Date().toDateString().split(" ")
        let month = monthDay[1]
        let day = monthDay[2]

        return (
            <View style={styles.sHContainer}>
                <View style={styles.sHLeft}>
                    <Text style={styles.sHTitle}>STOCKS</Text>

                    <Text style={styles.sHDate}>{month} {day}</Text>
                </View>

                <View style={styles.sHRight}>
                    <Text style={styles.sHDisclaimer}>Data provided for free by IEX.</Text>
                    <Text style={styles.sHDisclaimer}>View IEX’s Terms of Use.</Text>
                </View>
            </View>
        )
    }
}

export default StocksHeader