import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';


class Footer extends Component {

    render() {

        const footerLayout = (middleButton) => {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => Navigation.push(this.props.component, {
                        component: {
                            name: 'EnergyTechWeekly',
                            options: {
                                topBar : {
                                    visible : 'false'
                                }
                            }
                        }
                    } )}>
                        <Text style={styles.buttonText}>Energy Technology</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (this.props.component === "Dashboard") {
                            // go to the website
                        } else {
                            Navigation.pop(this.props.component)
                        }
                    }}>
                        <Text style={styles.buttonText}>{middleButton}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Upcoming TPH/PWP Event Schedule</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        if (this.props.component === "Dashboard") {
            let middleButton = "Go To TPH Website"

            return footerLayout(middleButton)

        } else {
            let middleButton = "Back To Home Screen"

            return footerLayout(middleButton)
        }
    } 
}

export default Footer

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
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