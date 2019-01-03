import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


class Footer extends Component {
    render() {
        let middleButton

        if ("Dashboard" === "Dashboard") {
            let middleButton = "Go To TPH Website"
        } else {
            let middleButton = "Go To Dashboard"
        }


        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Energy Technology</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{middleButton}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Upcoming TPH/PWP Event Schedule</Text>
                </TouchableOpacity>
            </View>
        )
    } 
}

export default Footer

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        height: 75,
        backgroundColor : 'rgba(15, 15, 15, 1)',
        zIndex: 2
    },
    button : {
        width: '30%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        backgroundColor: 'blue',
    },
    buttonText : {
        paddingHorizontal: 5,
        textAlign: 'center',
        fontSize: 10,
        color: 'white'
    }
})