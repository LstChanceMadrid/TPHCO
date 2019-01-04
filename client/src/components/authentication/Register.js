import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import axios from 'axios'
import * as screen from '../../constants/screenLayouts'


export default class Register extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      firstName : ''
    }
  }
  
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }

  leaveScreen = () => {
    Navigation.pop(this.props.componentId)
  }
  
  name = (e) => {
    console.log(e.target.value)
    this.setState({
      ...this.state,
      firstName : e.target.value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.registerContainer}>
          <Text style={styles.title}>Register</Text>

          <TextInput style={styles.input} placeholder="Email" autoCapitalize='none' placeholderTextColor='rgba(0, 0, 0, 0.5)'></TextInput>

          <TextInput style={styles.input} name="firstname" onChange={this.name} placeholder="First Name" autoCapitalize='none' placeholderTextColor='rgba(0, 0, 0, 0.5)' value={this.state.firstName}></TextInput>

          <TextInput style={styles.input} placeholder="Last Name" autoCapitalize='none' placeholderTextColor='rgba(0, 0, 0, 0.5)'></TextInput>

          <TextInput style={styles.input} placeholder="Company" autoCapitalize='none' placeholderTextColor='rgba(0, 0, 0, 0.5)'></TextInput>
          
          <TextInput style={styles.input} placeholder="Position" autoCapitalize='none' placeholderTextColor='rgba(0, 0, 0, 0.5)'></TextInput>

          <TouchableOpacity style={styles.registerButton} onPress={() => this.goToScreen('AgreeToTerms')}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          
          <Text style={styles.orLogin}>or <Text style={styles.login} onPress={() => {this.leaveScreen()}}>Login</Text></Text>
        </View>

        <Image style={styles.logo} resizeMode={'contain'} source={require('../../styles/images/tphco.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 30, 40, 1)',
    justifyContent: 'center',
    padding: 20,
  },
  registerContainer: {
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 10
  },
  title: {
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    marginTop: 20
  },
  registerButton: {
    backgroundColor: 'blue',
    width: 120,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  registerButtonText: {
    color: 'white',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center'
  },
  orLogin: {
    textAlign: 'right'
  },
  login: {
    color: 'blue'
  },
  logo: {
    width: 300,
    height: 200,
    tintColor: 'rgba(255, 255, 255, 1)',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
})
